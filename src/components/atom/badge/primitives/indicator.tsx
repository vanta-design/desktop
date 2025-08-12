import type { Semantic } from '@/types/color';
import { cn } from '@/utils/common';
import { indicator, semanticMap, sizeMap } from './styles/indicator.css';

type IndicatorSize = 'small' | 'medium' | 'large';

interface _IndicatorProps {
  size?: IndicatorSize;
  semantic?: Semantic;
}

export function _PrimitiveIndicator(props: _IndicatorProps) {
  const { size = 'small', semantic } = props;

  const classNames = [
    indicator,
    sizeMap[size],
    semantic && semanticMap[semantic],
  ];

  return <span role='status' className={cn(classNames)} />;
}
