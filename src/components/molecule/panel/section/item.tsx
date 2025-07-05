import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren, ReactNode } from 'react';
import { Icon } from '@/components/atom/icon';
import { Typo } from '@/components/atom/typography';
import { Row } from '@/components/layout/row';
import { fullWidth, userSelectNone } from '@/styles/utils.css';
import { spacing } from '@/tokens/attribute.css';
import { cn } from '@/utils/common';
import { activeStyle, emphasizedStyle, item } from './styles/item.css';

interface _PanelSectionItemProps extends PropsWithChildren {
  emphasized?: boolean;
  active?: boolean;
  leadingArea?: ReactNode;
  leadingIcon?: LucideIcon;
  trailingArea?: ReactNode;
}

export function _PanelSectionItem(props: _PanelSectionItemProps) {
  const {
    emphasized,
    active,
    leadingArea,
    leadingIcon,
    trailingArea,
    children,
  } = props;

  const classNames = [
    item,
    userSelectNone,
    {
      [emphasizedStyle]: emphasized,
      [activeStyle]: active,
    },
  ];

  return (
    <Row
      className={cn(classNames)}
      gap={spacing[6]}
      align='center'
      justify='start'
    >
      {leadingArea ? (
        leadingArea
      ) : leadingIcon ? (
        <Icon icon={leadingIcon} size={16} />
      ) : (
        leadingArea
      )}
      <Typo.Caption
        className={fullWidth}
        weight={emphasized ? 'strong' : 'regular'}
      >
        {children}
      </Typo.Caption>
      {!active && trailingArea}
    </Row>
  );
}
