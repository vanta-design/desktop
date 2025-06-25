import { createElement } from 'react';
import { cn } from '@/utils/common';
import type { FlexProps } from './shared';
import alignMap from './styles/align.css';
import directionMap from './styles/direction.css';
import { flex, noGrow, noShrink } from './styles/flex.css';
import justifyMap from './styles/justify.css';
import wrapMap from './styles/wrap.css';

export function Flex(props: FlexProps) {
  const {
    as = 'div',
    direction = 'row',
    wrap = 'nowrap',
    align = 'stretch',
    justify = 'center',
    grow = true,
    shrink = true,
    gap,
    className,
    style,
    ...restProps
  } = props;

  const classNames = [
    flex,
    directionMap[direction],
    alignMap[align],
    justifyMap[justify],
    wrapMap[wrap],
    className,
    {
      [noGrow]: !grow,
      [noShrink]: !shrink,
    },
  ];

  return createElement(as, {
    ...restProps,
    className: cn(classNames),
    style: { ...style, gap },
  });
}
