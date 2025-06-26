import type { LucideIcon } from 'lucide-react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import type { Semantic } from '@/types/color';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { Typo } from '../typography';
import semanticMap from './styles/semantic.css';
import sizeMap from './styles/size.css';

const gapMap = {
  large: spacing[6],
  small: spacing[4],
};

const TypoMap = {
  large: Typo.Caption,
  small: Typo.Footnote,
};

const iconSizeMap = {
  large: 14,
  small: 12,
};

type BadgeSize = 'large' | 'small';

interface _PrimitiveBadgeProps extends BaseProps<HAS_CHILDREN> {
  size: BadgeSize;
  semantic?: Semantic;
  icon?: LucideIcon;
}

export function _PrimitiveBadge(props: _PrimitiveBadgeProps) {
  const { size, semantic = 'neutral', icon: Icon, className, children } = props;
  const Typo = TypoMap[size];

  const classNames = [sizeMap[size], semanticMap[semantic], className];

  return (
    <Row
      as='span'
      className={cn(classNames)}
      inline
      gap={gapMap[size]}
      align='center'
    >
      {Icon && <Icon size={iconSizeMap[size]} />}
      <Typo>{children}</Typo>
    </Row>
  );
}
