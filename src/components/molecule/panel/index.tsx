import type { PropsWithChildren } from 'react';
import { Column } from '@/components/layout/column';
import { fullWidth } from '@/styles/utils.css';
import { cn } from '@/utils/common';
import { _PanelHeader } from './header';
import { _PanelSection } from './section';
import { panel } from './styles/panel.css';

export function Panel(props: PropsWithChildren) {
  const { children } = props;

  return <Column className={cn(panel, fullWidth)}>{children}</Column>;
}

Panel.Header = _PanelHeader;
Panel.Section = _PanelSection;
