import { useCallback, useState } from 'react';
import { Container } from '@/components/layout/container';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { _PanelSectionHeader } from './header';
import { _PanelSectionItem } from './item';

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
    <Container vertical='narrow'>
      <_PanelSectionHeader title={title} open={isOpen} onClick={handleClick} />
      {isOpen && children}
    </Container>
  );
}

_PanelSection.Item = _PanelSectionItem;
