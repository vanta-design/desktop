import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import type { PropsWithIcons } from '@/types/props';
import { Typo } from '../../typography';
import { _PrimitiveButton } from '../primitive';
import type { ButtonPropsBase } from '../shared';
import { content } from '../styles/button.css';

export interface _DefaultButtonProps extends ButtonPropsBase, PropsWithIcons {}

export function _DefaultButton(props: _DefaultButtonProps) {
  const {
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    children,
  } = props;

  return (
    <_PrimitiveButton>
      <Row className={content} as='span' align='center' gap={spacing[8]}>
        {LeadingIcon && <LeadingIcon size={18} />}
        <Typo.Body weight='strong'>{children}</Typo.Body>
        {TrailingIcon && <TrailingIcon size={18} />}
      </Row>
    </_PrimitiveButton>
  );
}
