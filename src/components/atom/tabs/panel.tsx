import { type PropsWithChildren, useMemo } from 'react';
import { useTabsContext } from './context';

interface _TabsPanelProps extends PropsWithChildren {
  value: string;
}

export function _TabsPanel(props: _TabsPanelProps) {
  const { value, children } = props;
  const { selected } = useTabsContext();
  const isActive = useMemo(() => value === selected, [value, selected]);

  return (
    <div role='tabpanel' hidden={!isActive}>
      {isActive && children}
    </div>
  );
}
