import {
  type LabelHTMLAttributes,
  type PropsWithChildren,
  useMemo,
} from 'react';
import { Row } from '@/components/layout/row';
import { useInputFieldContext } from '@/components/molecule/input-field/context';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { Typo } from '../typography';

export interface LabelProps
  extends PropsWithChildren,
    LabelHTMLAttributes<HTMLLabelElement> {
  optional?: boolean;
  optionalLabel?: string;
}

export function Label(props: LabelProps) {
  const {
    optional: optionalProp,
    optionalLabel = '(선택)',
    children,
    ...restProps
  } = props;
  const { optional: optionalContext } = useInputFieldContext();

  const optional = useMemo(
    () => optionalProp ?? optionalContext,
    [optionalProp, optionalContext],
  );

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
