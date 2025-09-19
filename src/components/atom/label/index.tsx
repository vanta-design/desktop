import type { LabelHTMLAttributes, PropsWithChildren } from 'react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { Typo } from '../typography';

interface LabelProps
  extends PropsWithChildren,
    LabelHTMLAttributes<HTMLLabelElement> {
  optional?: boolean;
  optionalLabel?: string;
}

export function Label(props: LabelProps) {
  const { optional, optionalLabel = '(선택)', children, ...restProps } = props;

  return (
    <label {...restProps}>
      <Row as='span' gap={spacing[4]} align='center' justify='start'>
        <Typo.Body color={text.secondary}>{children}</Typo.Body>
        {optional && (
          <Typo.Footnote weight='light' color={text.tertiary}>
            {optionalLabel}
          </Typo.Footnote>
        )}
      </Row>
    </label>
  );
}
