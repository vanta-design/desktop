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
  emphasized?: boolean;
  essential?: boolean;
}

export function Label(props: LabelProps) {
  const { emphasized, essential, children, ...restProps } = props;

  return (
    <label {...restProps}>
      <Row as='span' gap={spacing[2]} align='center'>
        <Typo.Body
          weight={emphasized ? 'strong' : 'regular'}
          color={emphasized ? text.primary : text.secondary}
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
