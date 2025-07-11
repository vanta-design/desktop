import { spacing } from '@/tokens/attribute.css';
import { _PrimitiveTextInput, type TextInputProps } from '../primitives/text';
import { _CompactTextInput } from './compact-text';
import { defaultText } from './styles/text.css';

export function _TextInput(props: TextInputProps) {
  return (
    <_PrimitiveTextInput
      {...props}
      className={defaultText}
      gap={spacing[8]}
      iconSize={18}
      resetIconSize={16}
    />
  );
}

_TextInput.Compact = _CompactTextInput;
