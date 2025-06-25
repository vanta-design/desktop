import type { ComponentType, FC } from 'react';

type Defaultize<P, K extends keyof P> = Omit<P, K> & Partial<Pick<P, K>>;
type ClassNameDefaultize<P extends { className?: string }> = Omit<
  P,
  'className'
> & { className?: string };

export function withDefaultProps<P extends object, K extends keyof P>(
  Component: ComponentType<P>,
  defaultProps: Pick<P, K>,
): FC<Defaultize<P, K>> {
  type Props = Defaultize<P, K>;

  const Wrapped: FC<Props> = (props) => {
    const propsWithDefaults = { ...defaultProps, ...props } as P;
    return <Component {...propsWithDefaults} />;
  };

  Wrapped.displayName = Component.displayName || Component.name || 'Component';

  return Wrapped;
}

export function withDefaultClassNames<P extends { className?: string }>(
  Component: ComponentType<P>,
  defaultClassNames: string,
): FC<ClassNameDefaultize<P>> {
  type Props = ClassNameDefaultize<P>;

  const Wrapped: FC<Props> = ({ className, ...restProps }) => {
    const mergedClassName = className
      ? `${defaultClassNames} ${className}`
      : defaultClassNames;

    return <Component {...(restProps as P)} className={mergedClassName} />;
  };

  Wrapped.displayName = `withDefaultClassNames(${Component.displayName || Component.name || 'Component'})`;
  return Wrapped;
}
