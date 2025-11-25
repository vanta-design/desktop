import type { LucideIcon } from 'lucide-react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Icon } from '@/components/atom/icon';
import { Typo } from '@/components/atom/typography';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { segment } from './segment.css';

interface _BreadcrumbSegmentProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  active?: boolean;
  icon?: LucideIcon;
}

export function _BreadcrumbSegment(props: _BreadcrumbSegmentProps) {
  const { active, icon, children, ...restProps } = props;

  return (
    <button {...restProps} type='button' className={segment}>
      <Row gap={spacing[6]} color={active ? text.primary : text.secondary}>
        <Icon icon={icon} size={14} />
        <Typo.Caption weight={active ? 'strong' : 'regular'}>
          {children}
        </Typo.Caption>
      </Row>
    </button>
  );
}
