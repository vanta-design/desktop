import { Label } from '@/components/atom/label';
import { Paragraph } from '@/components/atom/typography';
import { Column } from '@/components/layout/column';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';

interface InputFieldProps extends BaseProps<HAS_CHILDREN> {
  label: string;
  description?: string;
  essential?: boolean;
}

export function InputField(props: InputFieldProps) {
  const { label, description, essential, children } = props;

  return (
    <Column gap={spacing[8]}>
      <Label optional={essential}>{label}</Label>
      {children}
      <Paragraph.Caption color={text.tertiary}>{description}</Paragraph.Caption>
    </Column>
  );
}
