import { useContext } from 'react';

export function createContextHook<T>(context: React.Context<T | null>) {
  return () => {
    const value = useContext(context);

    if (!value) {
      throw new Error(
        `"${context.displayName}" Context value is null. Make sure to use within a Provider.`,
      );
    }

    return value;
  };
}
