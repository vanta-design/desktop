import { X } from 'lucide-react';
import { Row } from '@/components/layout/row';
import { text } from '@/tokens/color.css';
import { Icon } from '../icon';
import { Typo } from '../typography';
import { closeButton, header } from './styles/header.css';

interface _DialogHeaderProps {
  title: string;
  hideCloseButton?: boolean;
  close: () => void;
}

export function _DialogHeader(props: _DialogHeaderProps) {
  const { title, hideCloseButton, close } = props;

  return (
    <div className={header}>
      <Row align='start' justify='between'>
        <Typo.Title weight='strong'>{title}</Typo.Title>
        {!hideCloseButton && (
          <button
            type='button'
            className={closeButton}
            onClick={close}
            aria-label='Close dialog'
          >
            <Icon icon={X} size={18} color={text.tertiary} />
          </button>
        )}
      </Row>
    </div>
  );
}
