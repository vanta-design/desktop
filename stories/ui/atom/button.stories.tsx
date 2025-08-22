import type { Meta, StoryObj } from '@storybook/react';
import { SquareDashed } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { Button, IconButton } from '@/components/atom/button';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';

const meta: Meta = {
  title: 'UI/Atom/Button',
};

export default meta;

export const Default: StoryObj<typeof Button.Large> = {
  render: (args) => (
    <>
      <Section>
        <Button.Large {...args} variant='primary' />
        <Button.Large {...args} variant='secondary' />
        <Button.Large {...args} variant='bare' />
      </Section>
      <Section>
        <Button.Medium {...args} variant='primary' />
        <Button.Medium {...args} variant='secondary' />
        <Button.Medium {...args} variant='bare' />
      </Section>
      <Section>
        <Button.Small {...args} variant='primary' />
        <Button.Small {...args} variant='secondary' />
        <Button.Small {...args} variant='bare' />
      </Section>
    </>
  ),
  args: {
    children: '버튼',
    loading: false,
    disabled: false,
    leadingIcon: SquareDashed,
    trailingIcon: SquareDashed,
  },
};

export const Icon: StoryObj<typeof IconButton.Large> = {
  render: (args) => (
    <>
      <Section>
        <IconButton.Large {...args} variant='primary' />
        <IconButton.Large {...args} variant='secondary' />
        <IconButton.Large {...args} variant='bare' />
      </Section>
      <Section>
        <IconButton.Medium {...args} variant='primary' />
        <IconButton.Medium {...args} variant='secondary' />
        <IconButton.Medium {...args} variant='bare' />
      </Section>
      <Section>
        <IconButton.Small {...args} variant='primary' />
        <IconButton.Small {...args} variant='secondary' />
        <IconButton.Small {...args} variant='bare' />
      </Section>
    </>
  ),
  args: {
    icon: SquareDashed,
    loading: false,
    disabled: false,
  },
};

function Section(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Container>
      <Row align='center' gap={20}>
        {children}
      </Row>
    </Container>
  );
}
