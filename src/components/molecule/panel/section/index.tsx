import { useCallback, useState } from 'react';
import { fillWidth } from '@/styles/utils.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { _PanelSectionHeader } from './header';
import { _PanelSectionItem } from './item';
import { section } from './styles/section.css';

interface _PanelSectionProps extends BaseProps<HAS_CHILDREN> {
  title: string;
  defaultOpen?: boolean;
}

export function _PanelSection(props: _PanelSectionProps) {
  const { title, defaultOpen = true, children } = props;

  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <ul className={cn(section, fillWidth)}>
      <_PanelSectionHeader title={title} open={isOpen} onClick={handleClick} />
      {isOpen && children}
    </ul>
  );
}

_PanelSection.Item = _PanelSectionItem;
