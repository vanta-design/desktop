import type { ReactNode } from 'react';

export interface FlowContextShape {
  [key: string]: unknown;
}

export interface FlowEvent {
  type: string;
  payload?: unknown;
}

export interface Transition<C extends FlowContextShape, E extends FlowEvent> {
  to: string;
  guard?: (ctx: C, event: E) => boolean | Promise<boolean>;
  priority?: number;
  else?: boolean;
  action?: (ctx: C, event: E) => C | Promise<C>;
}

export interface StepConfig<C extends FlowContextShape, E extends FlowEvent> {
  id: string;
  onEnter?: (ctx: C) => C | Promise<C>;
  onExit?: (ctx: C) => C | Promise<C>;
  transitions?: Array<Transition<C, E>>;
  content: ReactNode;
}

export interface FlowState<C extends FlowContextShape> {
  current: string;
  context: C;
  history: string[];
}

export interface FlowRuntime<C extends FlowContextShape, E extends FlowEvent> {
  state: FlowState<C>;
  send: (event: E) => Promise<void>;
  go: (next: string) => Promise<void>;
  tryGo: (next: string, patch?: Partial<C>) => Promise<boolean>;
  setContext: (updater: (c: C) => C) => void;
}

export interface FlowProps<C extends FlowContextShape, _E extends FlowEvent> {
  initial: string;
  initialContext: C;
  children: ReactNode;
  onChange?: (next: FlowState<C>) => void;
  allowFreeTransition?: boolean;
}

export interface StepProps<C extends FlowContextShape, E extends FlowEvent> {
  stepId: string;
  children?: ReactNode;
  onEnter?: (ctx: C) => C | Promise<C>;
  onExit?: (ctx: C) => C | Promise<C>;
  transitions?: Array<Transition<C, E>>;
}
