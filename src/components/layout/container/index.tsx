import { createElement, type HTMLAttributes, type JSX, type Ref } from 'react';
import { layout } from '@/tokens/layout.css';
import { cn } from '@/utils/common';
import { container } from './styles.css';

type Padding = 'large' | 'medium' | 'small' | 'none';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  ref?: Ref<HTMLElement>;
  vertical?: Padding;
  horizontal?: Padding;
}

export function Container(props: ContainerProps) {
  const {
    as = 'div',
    vertical = 'medium',
    horizontal = 'medium',
    className,
    style,
    ...restProps
  } = props;

  const classNames = [container, className];

  return createElement(as, {
    ...restProps,
    className: cn(classNames),
    style: {
      padding: `${vertical !== 'none' ? layout.padding[vertical] : 0} ${horizontal !== 'none' ? layout.padding[horizontal] : 0}`,
      ...style,
    },
  });
}
