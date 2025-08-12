import { ChevronDown, ChevronRight } from 'lucide-react';
import { Icon } from '@/components/atom/icon';
import { Typo } from '@/components/atom/typography';
import { Row } from '@/components/layout/row';
import { cn } from '@/utils/common';
import { header, innerStyle } from './styles/header.css';

interface _PanelSectionHeaderProps {
  title: string;
  open?: boolean;
  inner?: boolean;
  onClick?: () => unknown;
}

export function _PanelSectionHeader(props: _PanelSectionHeaderProps) {
  const { title, open, inner, onClick } = props;

  return (
    <Row
      className={cn(header, { [innerStyle]: inner })}
      align='center'
      justify='between'
      onClick={onClick}
    >
      <Typo.Footnote weight='strong'>{title}</Typo.Footnote>
      <Icon icon={open ? ChevronDown : ChevronRight} size={12} />
    </Row>
  );
}
