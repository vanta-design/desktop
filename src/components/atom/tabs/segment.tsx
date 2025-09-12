import type { LucideIcon } from 'lucide-react';
import { useCallback, useMemo } from 'react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { Icon } from '../icon';
import { Typo } from '../typography';
import { useTabsContext } from './context';
import { active, segment } from './styles/segment.css';

interface _TabsSegmentProps extends BaseProps<HAS_CHILDREN> {
  icon?: LucideIcon;
  value: string;
  disabled?: boolean;
}

export function _TabsSegment(props: _TabsSegmentProps) {
  const { icon, value, className, children, ...restProps } = props;
  const { selected, setSelected } = useTabsContext();

  const isActive = useMemo(() => value === selected, [value, selected]);

  const onClick = useCallback(() => {
    setSelected(value);
  }, [value, setSelected]);

  return (
    <button
      {...restProps}
      className={cn(segment, isActive && active, className)}
      type='button'
      role='tab'
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={onClick}
    >
      <Row as='span' gap={spacing[6]} align='center'>
        <Icon icon={icon} size={14} />
        <Typo.Caption>{children}</Typo.Caption>
      </Row>
    </button>
  );
}
