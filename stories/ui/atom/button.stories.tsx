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

const defaultButtonArgs = {
  children: '버튼',
  leadingIcon: SquareDashed,
  trailingIcon: SquareDashed,
};

const defaultIconButtonArgs = {
  icon: SquareDashed,
};

export const Showcase: StoryObj = {
  render: () => (
    <>
      <Section>
        <Button.Large {...defaultButtonArgs} variant='primary' />
        <Button.Large {...defaultButtonArgs} variant='secondary' />
        <Button.Large {...defaultButtonArgs} variant='bare' />
      </Section>
      <Section>
        <Button.Medium {...defaultButtonArgs} variant='primary' />
        <Button.Medium {...defaultButtonArgs} variant='secondary' />
        <Button.Medium {...defaultButtonArgs} variant='bare' />
      </Section>
      <Section>
        <Button.Small {...defaultButtonArgs} variant='primary' />
        <Button.Small {...defaultButtonArgs} variant='secondary' />
        <Button.Small {...defaultButtonArgs} variant='bare' />
      </Section>
      <Section>
        <IconButton.Large {...defaultIconButtonArgs} variant='primary' />
        <IconButton.Large {...defaultIconButtonArgs} variant='secondary' />
        <IconButton.Large {...defaultIconButtonArgs} variant='bare' />
      </Section>
      <Section>
        <IconButton.Medium {...defaultIconButtonArgs} variant='primary' />
        <IconButton.Medium {...defaultIconButtonArgs} variant='secondary' />
        <IconButton.Medium {...defaultIconButtonArgs} variant='bare' />
      </Section>
      <Section>
        <IconButton.Small {...defaultIconButtonArgs} variant='primary' />
        <IconButton.Small {...defaultIconButtonArgs} variant='secondary' />
        <IconButton.Small {...defaultIconButtonArgs} variant='bare' />
      </Section>
    </>
  ),
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
