import { Row } from '@/components/layout/row';
import { fillWidth } from '@/styles/utils.css';
import { spacing } from '@/tokens/attribute.css';
import type { PropsWithIcons } from '@/types/props';
import { cn } from '@/utils/common';
import { Icon } from '../../icon';
import { LoadingCircle } from '../../loading-circle';
import { Typo } from '../../typography';
import { _PrimitiveButton } from '../primitive';
import type { ButtonPropsBase } from '../shared';
import { content, hide, loadingCircle } from '../styles/button.css';

const iconSizeMap = {
  large: 18,
  medium: 16,
  small: 14,
};

const typoMap = {
  large: { Typo: Typo.Body, type: 'body' },
  medium: { Typo: Typo.Caption, type: 'caption' },
  small: { Typo: Typo.Footnote, type: 'footnote' },
} as const;

const gapMap = {
  large: spacing[8],
  medium: spacing[6],
  small: spacing[4],
};

export interface _DefaultButtonProps extends ButtonPropsBase, PropsWithIcons {
  fill?: boolean;
}

export function _DefaultButton(props: _DefaultButtonProps) {
  const {
    size = 'large',
    loading,
    leadingIcon,
    trailingIcon,
    fill,
    className,
    children,
  } = props;

  const { Typo, type } = typoMap[size];
  const weight = size === 'large' ? 'strong' : 'regular';

  return (
    <_PrimitiveButton {...props} className={cn(fill && fillWidth, className)}>
      <Row
        className={cn(content, { [hide]: loading })}
        as='span'
        align='center'
        gap={gapMap[size]}
        aria-hidden={loading}
      >
        <Icon icon={leadingIcon} size={iconSizeMap[size]} />
        <Typo weight={weight}>{children}</Typo>
        <Icon icon={trailingIcon} size={iconSizeMap[size]} />
      </Row>
      {loading && <LoadingCircle className={loadingCircle} size={type} />}
    </_PrimitiveButton>
  );
}
