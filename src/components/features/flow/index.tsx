import React, {
  Children,
  createContext,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type {
  FlowContextShape,
  FlowEvent,
  FlowProps,
  FlowRuntime,
  FlowState,
  StepConfig,
  StepProps,
  Transition,
} from './types';

export function createFlow<
  C extends FlowContextShape = FlowContextShape,
  E extends FlowEvent = FlowEvent,
>() {
  const FlowContext = createContext<FlowRuntime<C, E> | null>(null);

  function useFlow() {
    const ctx = React.useContext(FlowContext);
    if (ctx === null) {
      throw new Error(
        'useFlow must be used within the corresponding Flow.Provider.',
      );
    }
    return ctx;
  }

  function Step(_: StepProps<C, E>) {
    return null;
  }

  function FlowRoot({
    initial,
    initialContext,
    children,
    onChange,
    allowFreeTransition = false,
  }: FlowProps<C, E>) {
    const [state, setState] = useState<FlowState<C>>({
      current: initial,
      context: initialContext,
      history: [initial],
    });

    const currentStepRef = useRef(initial);
    const mountedRef = useRef(false);

    const stepsMap = useMemo(() => {
      const map = new Map<string, StepConfig<C, E>>();

      const processChildren = (nodes: ReactNode): void => {
        Children.forEach(nodes, (child) => {
          if (!React.isValidElement(child)) return;

          if (child.type === Step) {
            const props = child.props as StepProps<C, E>;
            if (map.has(props.stepId)) {
              throw new Error(
                `Duplicate stepId detected: "${props.stepId}". Each step must have a unique stepId.`,
              );
            }
            map.set(props.stepId, {
              id: props.stepId,
              onEnter: props.onEnter,
              onExit: props.onExit,
              transitions: props.transitions,
              content: props.children,
            });
          }
        });
      };

      processChildren(children);
      return map;
    }, [children]);

    const setContext = useCallback((updater: (c: C) => C) => {
      setState((prev) => ({
        ...prev,
        context: updater(prev.context),
      }));
    }, []);

    const executeLifecycle = useCallback(
      async (
        hook: ((ctx: C) => C | Promise<C>) | undefined,
        context: C,
        expectedStep: string,
      ): Promise<C> => {
        if (!hook) return context;

        const result = await hook(context);

        if (currentStepRef.current !== expectedStep) {
          return context;
        }

        return result;
      },
      [],
    );

    const performTransition = useCallback(
      async (
        targetStepId: string,
        contextUpdater?: (ctx: C) => C | Promise<C>,
        skipValidation = false,
      ): Promise<boolean> => {
        const currentStep = stepsMap.get(state.current);
        const targetStep = stepsMap.get(targetStepId);

        if (!targetStep) {
          if (!skipValidation) {
            throw new Error(
              `Target step "${targetStepId}" not found. Available steps: ${Array.from(stepsMap.keys()).join(', ')}`,
            );
          }
          return false;
        }

        if (!skipValidation && !allowFreeTransition) {
          const hasTransition = currentStep?.transitions?.some(
            (t) => t.to === targetStepId,
          );
          if (!hasTransition) {
            throw new Error(
              `No transition defined from "${state.current}" to "${targetStepId}". ` +
                `Add a transition in the step configuration or enable allowFreeTransition.`,
            );
          }
        }

        const fromStep = state.current;
        let updatedContext = state.context;

        try {
          if (currentStep?.onExit) {
            updatedContext = await executeLifecycle(
              currentStep.onExit,
              updatedContext,
              fromStep,
            );
            if (currentStepRef.current !== fromStep) return false;
          }

          if (contextUpdater) {
            const result = await contextUpdater(updatedContext);
            if (currentStepRef.current !== fromStep) return false;
            updatedContext = result;
          }

          currentStepRef.current = targetStepId;

          if (targetStep.onEnter) {
            updatedContext = await executeLifecycle(
              targetStep.onEnter,
              updatedContext,
              targetStepId,
            );
            if (currentStepRef.current !== targetStepId) return false;
          }

          const newState: FlowState<C> = {
            current: targetStepId,
            context: updatedContext,
            history: [...state.history, targetStepId],
          };

          setState(newState);

          if (onChange) {
            onChange(newState);
          }

          return true;
        } catch (error) {
          currentStepRef.current = fromStep;
          throw error;
        }
      },
      [state, stepsMap, allowFreeTransition, executeLifecycle, onChange],
    );

    const send = useCallback(
      async (event: E): Promise<void> => {
        const currentStep = stepsMap.get(state.current);
        if (!currentStep?.transitions) return;

        const fromStep = state.current;
        const evaluations: Array<{
          transition: Transition<C, E>;
          passed: boolean;
        }> = [];

        for (const transition of currentStep.transitions) {
          if (transition.else) {
            evaluations.push({ transition, passed: false });
            continue;
          }

          if (!transition.guard) {
            evaluations.push({ transition, passed: true });
            continue;
          }

          const passed = await transition.guard(state.context, event);
          if (currentStepRef.current !== fromStep) return;

          evaluations.push({ transition, passed });
        }

        const passedTransitions = evaluations
          .filter((e) => e.passed)
          .sort(
            (a, b) =>
              (b.transition.priority ?? 0) - (a.transition.priority ?? 0),
          );

        let selectedTransition = passedTransitions[0]?.transition;

        if (!selectedTransition) {
          selectedTransition = evaluations.find(
            (e) => e.transition.else,
          )?.transition;
        }

        if (!selectedTransition) return;

        const action = selectedTransition.action;
        await performTransition(
          selectedTransition.to,
          action ? (ctx) => action(ctx, event) : undefined,
          true,
        );
      },
      [state.context, state.current, stepsMap, performTransition],
    );

    const go = useCallback(
      async (next: string): Promise<void> => {
        const success = await performTransition(next);
        if (!success) {
          throw new Error(`Failed to transition to "${next}"`);
        }
      },
      [performTransition],
    );

    const tryGo = useCallback(
      async (next: string, patch?: Partial<C>): Promise<boolean> => {
        try {
          const contextUpdater = patch
            ? (ctx: C) => ({ ...ctx, ...patch })
            : undefined;
          return await performTransition(next, contextUpdater);
        } catch {
          return false;
        }
      },
      [performTransition],
    );

    const runtime = useMemo<FlowRuntime<C, E>>(
      () => ({
        state,
        send,
        go,
        tryGo,
        setContext,
      }),
      [state, send, go, tryGo, setContext],
    );

    useEffect(() => {
      if (mountedRef.current) return;
      mountedRef.current = true;

      const initialStep = stepsMap.get(initial);
      if (!initialStep) {
        throw new Error(`Initial step "${initial}" not found`);
      }

      if (initialStep.onEnter) {
        (async () => {
          const updatedContext = await executeLifecycle(
            initialStep.onEnter,
            initialContext,
            initial,
          );

          if (currentStepRef.current !== initial) return;

          const newState: FlowState<C> = {
            current: initial,
            context: updatedContext,
            history: [initial],
          };

          setState(newState);

          if (onChange) {
            onChange(newState);
          }
        })();
      } else if (onChange) {
        onChange(state);
      }
    }, [executeLifecycle, initialContext, stepsMap, state, initial, onChange]);

    const currentStepConfig = stepsMap.get(state.current);

    return (
      <FlowContext.Provider value={runtime}>
        {currentStepConfig?.content}
      </FlowContext.Provider>
    );
  }

  const Flow = Object.assign(FlowRoot, { Step });

  return { Flow, Step, useFlow, context: FlowContext };
}
