import { Row } from '@/components/layout/row';
import type { Semantic } from '@/types/color';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { primitive, semanticMap } from './styles/badge.css';

export interface _PrimitiveBadgeProps extends BaseProps<HAS_CHILDREN> {
  semantic?: Semantic;
  gap?: string;
}

export function _PrimitiveBadge(props: _PrimitiveBadgeProps) {
  const { semantic, gap, className, children } = props;

  const classNames = [primitive, semantic && semanticMap[semantic], className];

  return (
    <Row as='span' className={cn(classNames)} inline gap={gap} align='center'>
      {children}
    </Row>
  );
}
