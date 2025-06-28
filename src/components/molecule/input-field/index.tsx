import { Label } from '@/components/atom/label';
import { Paragraph } from '@/components/atom/typography';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';

interface InputFieldProps extends BaseProps<HAS_CHILDREN> {
  label: string;
  description?: string;
  essential?: boolean;
}

export function InputField(props: InputFieldProps) {
  const { label, description, essential, children, ...restProps } = props;

  return (
    <Container {...restProps} vertical='wide'>
      <Column gap={spacing[8]}>
        <Label essential={essential}>{label}</Label>
        {children}
        <Paragraph.Caption color={text.tertiary}>
          {description}
        </Paragraph.Caption>
      </Column>
    </Container>
  );
}
