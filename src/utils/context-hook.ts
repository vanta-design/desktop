import { useContext } from 'react';

type ContextHookArg = {
  strict?: boolean;
};

export function createContextHook<T extends object>(
  context: React.Context<T | null>,
) {
  return (args?: ContextHookArg) => {
    const { strict = false } = args ?? {};
    const value = useContext(context);

    if (value == null) {
      if (strict) {
        throw new Error(`${context.displayName} is not provided`);
      }

      console.warn(`${context.displayName} is not provided`);

      const nullProxy = new Proxy<T>(Object.create(null), {
        get: () => null,
        has: () => true,
        ownKeys: () => [],
      });

      return nullProxy;
    }

    return value;
  };
}
