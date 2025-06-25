import { createElement, type HTMLAttributes, type JSX } from 'react';
import { padding } from '@/tokens/layout.css';
import { cn } from '@/utils/common';
import { container } from './styles.css';

type Padding = 'wide' | 'regular' | 'narrow' | 'none';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  vertical?: Padding;
  horizontal?: Padding;
}

export function Container(props: ContainerProps) {
  const {
    as = 'div',
    vertical = 'regular',
    horizontal = 'regular',
    className,
    style,
    ...restProps
  } = props;

  const classNames = [container, className];

  return createElement(as, {
    ...restProps,
    className: cn(classNames),
    style: {
      padding: `${vertical !== 'none' ? padding[vertical] : 0} ${horizontal !== 'none' ? padding[horizontal] : 0}`,
      ...style,
    },
  });
}
