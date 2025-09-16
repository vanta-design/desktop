import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import { Icon } from '../icon';
import { Typo } from '../typography';

interface _MenuItemProps extends PropsWithChildren {
  icon?: LucideIcon;
  onClick?: () => unknown;
}

export function _MenuItem(props: _MenuItemProps) {
  const { icon, onClick, children } = props;

  return (
    <Row
      as='li'
      role='menuitem'
      gap={spacing[8]}
      align='center'
      onClick={onClick}
    >
      <Icon icon={icon} size={14} />
      <Typo.Caption>{children}</Typo.Caption>
    </Row>
  );
}
