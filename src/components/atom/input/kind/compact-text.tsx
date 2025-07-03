import { spacing } from '@/tokens/attribute.css';
import { _PrimitiveTextInput, type TextInputProps } from '../primitives/text';
import { compactText } from './styles/text.css';

export function _CompactTextInput(props: TextInputProps) {
  return (
    <_PrimitiveTextInput
      {...props}
      className={compactText}
      gap={spacing[8]}
      iconSize={14}
      resetIconSize={14}
    />
  );
}
