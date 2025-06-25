import type { Meta, StoryObj } from '@storybook/react';
import { SquareDashed } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { Button } from '@/components/atom/button';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';

const meta: Meta = {
  title: 'Atom/Button',
  args: {
    children: '버튼',
    leadingIcon: SquareDashed,
    trailingIcon: SquareDashed,
  },
};

export default meta;

type ButtonStory = StoryObj<typeof Button.Large>;

export const Showcase: ButtonStory = {
  render: (props) => (
    <>
      <Section>
        <Button.Large {...props} variant='primary' />
        <Button.Large {...props} variant='secondary' />
        <Button.Large {...props} variant='text' />
      </Section>
      <Section>
        <Button.Medium {...props} variant='primary' />
        <Button.Large {...props} variant='secondary' />
        <Button.Medium {...props} variant='text' />
      </Section>
      <Section>
        <Button.Small {...props} variant='primary' />
        <Button.Small {...props} variant='secondary' />
        <Button.Small {...props} variant='text' />
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
