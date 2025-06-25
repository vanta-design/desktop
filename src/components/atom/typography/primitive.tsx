import { createElement, type JSX } from 'react';
import { cn } from '@/utils/common';
import type { TypographyPropsBase, Weight } from './shared';
import weightMap from './styles/weight.css';

export interface _PrimitiveProps extends TypographyPropsBase {
  as?: keyof JSX.IntrinsicElements;
  weight?: Weight;
  color?: string;
}

export function _Primitive(props: _PrimitiveProps) {
  const {
    as = 'span',
    weight = 'regular',
    color,
    children,
    className,
    style,
    ...restProps
  } = props;

  if (!children) {
    return null;
  }

  const classNames = [weightMap[weight], className];

  return createElement(as, {
    ...restProps,
    children,
    className: cn(classNames),
    style: { color, ...style },
  });
}
