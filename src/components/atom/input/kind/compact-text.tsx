import { spacing } from '@/tokens/attribute.css';
import typographyCss from '../../typography/styles/typography.css';
import { _PrimitiveTextInput, type TextInputProps } from '../primitives/text';
import { compactText } from './styles/text.css';

export function _CompactTextInput(props: TextInputProps) {
  return (
    <_PrimitiveTextInput
      {...props}
      className={compactText}
      inputClassName={typographyCss.caption}
      gap={spacing[8]}
      iconSize={14}
      resetIconSize={14}
    />
  );
}
