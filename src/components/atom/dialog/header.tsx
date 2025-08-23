import { X } from 'lucide-react';
import { Row } from '@/components/layout/row';
import { text } from '@/tokens/color.css';
import { Icon } from '../icon';
import { Typo } from '../typography';

interface _DialogHeaderProps {
  title: string;
  showCloseButton?: boolean;
  close: () => void;
}

export function _DialogHeader(props: _DialogHeaderProps) {
  const { title, showCloseButton, close } = props;

  return (
    <Row align='start' justify='start'>
      <Typo.Title weight='strong'>{title}</Typo.Title>
      {showCloseButton && (
        <button type='button' onClick={close} aria-label='Close dialog'>
          <Icon icon={X} size={18} color={text.tertiary} />
        </button>
      )}
    </Row>
  );
}
