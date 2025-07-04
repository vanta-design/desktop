import { ChevronDown, ChevronRight } from 'lucide-react';
import { Icon } from '@/components/atom/icon';
import { Typo } from '@/components/atom/typography';
import { Row } from '@/components/layout/row';
import { header } from './styles/header.css';

interface _PanelSectionHeaderProps {
  title: string;
  open?: boolean;
  onClick?: () => unknown;
}

export function _PanelSectionHeader(props: _PanelSectionHeaderProps) {
  const { title, open, onClick } = props;

  return (
    <Row className={header} align='center' justify='between' onClick={onClick}>
      <Typo.Footnote weight='strong'>{title}</Typo.Footnote>
      <Icon icon={open ? ChevronDown : ChevronRight} size={12} />
    </Row>
  );
}
