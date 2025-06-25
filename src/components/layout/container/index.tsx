import { createElement, type HTMLAttributes, type JSX } from 'react';
import { padding } from '@/tokens/layout.css';
import { cn } from '@/utils/common';
import { container } from './styles.css';

type Padding = 'wide' | 'regular' | 'narrow';

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
      padding: `${padding[vertical]} ${padding[horizontal]}`,
      ...style,
    },
  });
}
