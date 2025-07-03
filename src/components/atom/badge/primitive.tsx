import { Row } from '@/components/layout/row';
import type { Semantic } from '@/types/color';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import semanticMap from './styles/semantic.css';

export interface _PrimitiveBadgeProps extends BaseProps<HAS_CHILDREN> {
  semantic?: Semantic;
  gap?: string;
}

export function _PrimitiveBadge(props: _PrimitiveBadgeProps) {
  const { semantic = 'neutral', gap, className, children } = props;

  const classNames = [semanticMap[semantic], className];

  return (
    <Row as='span' className={cn(classNames)} inline gap={gap} align='center'>
      {children}
    </Row>
  );
}
