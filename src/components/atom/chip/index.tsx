import type { LucideIcon } from 'lucide-react';
import { useCallback } from 'react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { Icon } from '../icon';
import { Typo } from '../typography';
import { useChipGroupContext } from './context';
import { _ChipGroup } from './group';
import { active, chip } from './styles.css';

interface ChipProps extends BaseProps<HAS_CHILDREN> {
  value: string;
  leadingIcon?: LucideIcon;
}

export function Chip(props: ChipProps) {
  const { value, leadingIcon, className, children } = props;

  const { currentValue, setCurrentValue, onActive } = useChipGroupContext();

  const onClick = useCallback(() => {
    setCurrentValue(value);
    onActive?.(value);
  }, [value, setCurrentValue, onActive]);

  const classNames = [
    chip,
    className,
    {
      [active]: value === currentValue,
    },
  ];

  return (
    <Row
      as='button'
      className={cn(classNames)}
      gap={spacing[6]}
      onClick={onClick}
    >
      <Icon icon={leadingIcon} size={14} />
      <Typo.Caption>{children}</Typo.Caption>
    </Row>
  );
}

Chip.Group = _ChipGroup;
