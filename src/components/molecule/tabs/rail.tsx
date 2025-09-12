import { _Tabs } from '@/components/atom/tabs';
import { list, segment } from './styles/rail.css';
import type { TabsProps } from './types';

export function _RailTabs(props: TabsProps) {
  const { tabs: items, vertical } = props;
  const orientation = vertical ? 'vertical' : 'horizontal';

  return (
    <_Tabs.Root orientation={orientation} defaultSelected={items[0].value}>
      <_Tabs.List className={list[orientation]}>
        {items.map((item) => (
          <_Tabs.Segment
            key={item.value}
            className={segment[orientation]}
            value={item.value}
            icon={item.icon}
            disabled={item.disabled}
          >
            {item.label}
          </_Tabs.Segment>
        ))}
      </_Tabs.List>
      {items.map((item) => (
        <_Tabs.Panel key={item.value} value={item.value}>
          {item.content}
        </_Tabs.Panel>
      ))}
    </_Tabs.Root>
  );
}
