import { type PropsWithChildren, useState } from 'react';
import { TabsContext } from './context';

interface _TabsRootProps extends PropsWithChildren {
  defaultSelected: string;
  orientation: 'horizontal' | 'vertical';
}

export function _TabsRoot(props: _TabsRootProps) {
  const { defaultSelected, orientation, children } = props;

  const [selected, setSelected] = useState(defaultSelected);

  return (
    <TabsContext value={{ selected, orientation, setSelected }}>
      {children}
    </TabsContext>
  );
}
