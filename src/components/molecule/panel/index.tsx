import type { PropsWithChildren } from 'react';
import { Column } from '@/components/layout/column';
import { fillHeight } from '@/styles/utils.css';
import { cn } from '@/utils/common';
import { _PanelFooter } from './footer';
import { _PanelHeader } from './header';
import { _PanelSection } from './section';
import { panel } from './styles/panel.css';

export function Panel(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Column className={cn(panel, fillHeight)} justify='start' shrink={false}>
      {children}
    </Column>
  );
}

Panel.Header = _PanelHeader;
Panel.Section = _PanelSection;
Panel.Footer = _PanelFooter;
