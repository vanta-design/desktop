import { useCallback, useState } from 'react';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { _PanelSectionHeader } from './header';
import { _PanelSectionItem } from './item';
import { innerSection, section } from './styles/section.css';

interface _PanelSectionProps extends BaseProps<HAS_CHILDREN> {
  title: string;
  inner?: boolean;
  defaultOpen?: boolean;
}

export function _PanelSection(props: _PanelSectionProps) {
  const { title, inner = false, defaultOpen = true, children } = props;

  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <ul className={inner ? innerSection : section}>
      <_PanelSectionHeader
        title={title}
        open={isOpen}
        inner={inner}
        onClick={handleClick}
      />
      {isOpen && children}
    </ul>
  );
}

_PanelSection.Item = _PanelSectionItem;
