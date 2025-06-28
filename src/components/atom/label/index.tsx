import { Asterisk } from 'lucide-react';
import type { LabelHTMLAttributes, PropsWithChildren } from 'react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import { semantic, text } from '@/tokens/color.css';
import { Icon } from '../icon';
import { Typo } from '../typography';

interface LabelProps
  extends PropsWithChildren,
    LabelHTMLAttributes<HTMLLabelElement> {
  essential?: boolean;
}

export function Label(props: LabelProps) {
  const { essential, children, ...restProps } = props;

  return (
    <label {...restProps}>
      <Row as='span' gap={spacing[2]} align='center' justify='start'>
        <Typo.Body
          weight={essential ? 'strong' : 'regular'}
          color={essential ? text.primary : text.secondary}
        >
          {children}
        </Typo.Body>
        <Icon
          icon={essential ? Asterisk : null}
          size={12}
          color={semantic.negative.text}
        />
      </Row>
    </label>
  );
}
