import { X } from 'lucide-react';
import { Column } from '@/components/layout/column';
import { Row } from '@/components/layout/row';
import { fillWidth } from '@/styles/utils.css';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { Icon } from '../icon';
import { Typo } from '../typography';
import { closeButton, header } from './styles/header.css';

interface _DialogHeaderProps {
  title: string;
  description?: string;
  closeButton?: boolean;
  close: () => void;
}

export function _DialogHeader(props: _DialogHeaderProps) {
  const { title, description, closeButton: showCloseButton, close } = props;

  return (
    <div className={header} role='heading' aria-level={1}>
      <Row gap={spacing[16]} align='center'>
        <Column className={fillWidth} gap={spacing[4]} align='start'>
          <Typo.Title weight='strong'>{title}</Typo.Title>
          <Typo.Body color={text.tertiary}>{description}</Typo.Body>
        </Column>
        {showCloseButton && (
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
