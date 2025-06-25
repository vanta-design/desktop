import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import type { PropsWithIcons } from '@/types/props';
import { Typo } from '../../typography';
import { _PrimitiveButton } from '../primitive';
import type { ButtonPropsBase } from '../shared';
import { content } from '../styles/button.css';

const iconSizeMap = {
  large: 18,
  medium: 16,
  small: 14,
};

const typoMap = {
  large: Typo.Body,
  medium: Typo.Caption,
  small: Typo.Footnote,
};

const gapMap = {
  large: spacing[8],
  medium: spacing[6],
  small: spacing[4],
};

export interface _DefaultButtonProps extends ButtonPropsBase, PropsWithIcons {}

export function _DefaultButton(props: _DefaultButtonProps) {
  const {
    size = 'large',
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    children,
    ...restProps
  } = props;

  const Typo = typoMap[size];
  const weight = size === 'large' ? 'strong' : 'regular';

  return (
    <_PrimitiveButton size={size} {...restProps}>
      <Row className={content} as='span' align='center' gap={gapMap[size]}>
        {LeadingIcon && <LeadingIcon size={iconSizeMap[size]} />}
        <Typo weight={weight}>{children}</Typo>
        {TrailingIcon && <TrailingIcon size={iconSizeMap[size]} />}
      </Row>
    </_PrimitiveButton>
  );
}
