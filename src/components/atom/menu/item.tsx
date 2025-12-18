import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import type { Semantic } from '@/types/color';
import { cn } from '@/utils/common';
import { Icon } from '../icon';
import { Typo } from '../typography';
import { useMenuContext } from './context';
import { item, semanticMap } from './styles/item.css';

interface _MenuItemProps extends PropsWithChildren {
  semantic?: Semantic;
  icon?: LucideIcon;
  onClick?: () => unknown;
}

export function _MenuItem(props: _MenuItemProps) {
  const { semantic, icon, onClick, children } = props;
  const { setShow } = useMenuContext();

  return (
    <Row
      as='li'
      className={cn(item, semantic && semanticMap[semantic])}
      role='menuitem'
      gap={spacing[8]}
      align='center'
      justify='start'
      onClick={() => {
        onClick?.();
        setShow(false);
      }}
    >
      <Icon icon={icon} size={14} />
      <Typo.Caption>{children}</Typo.Caption>
    </Row>
  );
}
