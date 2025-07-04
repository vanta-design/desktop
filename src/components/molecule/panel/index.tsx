import type { PropsWithChildren } from 'react';
import { Column } from '@/components/layout/column';
import { _PanelHeader } from './header';
import { _PanelSection } from './section';
import { panel } from './styles/panel.css';

export function Panel(props: PropsWithChildren) {
  const { children } = props;

  return <Column className={panel}>{children}</Column>;
}

Panel.Header = _PanelHeader;
Panel.Section = _PanelSection;
