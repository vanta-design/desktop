import type { HTMLAttributes, JSX, Ref } from 'react';

type AlignItems = 'start' | 'center' | 'end' | 'stretch';
type JustifyContent =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';
type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'reverse';

export interface FlexProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  align?: AlignItems;
  justify?: JustifyContent;
  grow?: boolean;
  shrink?: boolean;
  inline?: boolean;
  gap?: string | number;
  ref?: Ref<HTMLElement>;
}
