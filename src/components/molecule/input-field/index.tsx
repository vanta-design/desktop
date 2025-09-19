import { Label, type LabelProps } from '@/components/atom/label';
import { Paragraph } from '@/components/atom/typography';
import { Column } from '@/components/layout/column';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { InputFieldContext } from './context';

interface InputFieldProps extends BaseProps<HAS_CHILDREN>, LabelProps {
  label: string;
  description?: string;
}

export function InputField(props: InputFieldProps) {
  const { label, description, optional, optionalLabel, children } = props;

  return (
    <InputFieldContext value={{ optional: optional || false }}>
      <Column gap={spacing[8]}>
        <Label optional={optional} optionalLabel={optionalLabel}>
          {label}
        </Label>
        {children}
        <Paragraph.Caption color={text.tertiary}>
          {description}
        </Paragraph.Caption>
      </Column>
    </InputFieldContext>
  );
}
