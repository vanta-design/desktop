import type { PropsWithChildren } from 'react';
import { Column } from '@/components/layout/column';
import { fullHeight } from '@/styles/utils.css';
import { cn } from '@/utils/common';
import { _PanelHeader } from './header';
import { _PanelSection } from './section';
import { panel } from './styles/panel.css';

export function Panel(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Column className={cn(panel, fullHeight)} justify='start' shrink={false}>
      {children}
    </Column>
  );
}

Panel.Header = _PanelHeader;
Panel.Section = _PanelSection;
