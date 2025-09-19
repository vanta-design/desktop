import { useContext } from 'react';

export function createContextHook<T extends object>(
  context: React.Context<T | null>,
) {
  return () => {
    const value = useContext(context);

    if (value == null) {
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
