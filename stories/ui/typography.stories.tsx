import type { Meta, StoryObj } from '@storybook/react';
import { Typo } from '@/components/atom/typography';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { text } from '@/tokens/color.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';

const meta: Meta = {
  title: 'Atom/Typography',
  args: {
    children: '백합꽃이 피어도 밤이 오면 지는구나',
  },
};

export default meta;

type TypographyStory = StoryObj<typeof Typo.Body>;

export const Showcase: TypographyStory = {
  render: (props) => (
    <>
      <Section label='Display'>
        <Typo.Display {...props} weight='bold' />
        <Typo.Display {...props} weight='strong' />
        <Typo.Display {...props} weight='regular' />
        <Typo.Display {...props} weight='light' />
      </Section>
      <Section label='Headline'>
        <Typo.Headline {...props} weight='bold' />
        <Typo.Headline {...props} weight='strong' />
        <Typo.Headline {...props} weight='regular' />
        <Typo.Headline {...props} weight='light' />
      </Section>{' '}
      <Section label='Title'>
        <Typo.Title {...props} weight='bold' />
        <Typo.Title {...props} weight='strong' />
        <Typo.Title {...props} weight='regular' />
        <Typo.Title {...props} weight='light' />
      </Section>{' '}
      <Section label='Lead'>
        <Typo.Lead {...props} weight='bold' />
        <Typo.Lead {...props} weight='strong' />
        <Typo.Lead {...props} weight='regular' />
        <Typo.Lead {...props} weight='light' />
      </Section>{' '}
      <Section label='Body'>
        <Typo.Body {...props} weight='bold' />
        <Typo.Body {...props} weight='strong' />
        <Typo.Body {...props} weight='regular' />
        <Typo.Body {...props} weight='light' />
      </Section>{' '}
      <Section label='Caption'>
        <Typo.Caption {...props} weight='bold' />
        <Typo.Caption {...props} weight='strong' />
        <Typo.Caption {...props} weight='regular' />
        <Typo.Caption {...props} weight='light' />
      </Section>{' '}
      <Section label='Footnote'>
        <Typo.Footnote {...props} weight='bold' />
        <Typo.Footnote {...props} weight='strong' />
        <Typo.Footnote {...props} weight='regular' />
        <Typo.Footnote {...props} weight='light' />
      </Section>{' '}
      <Section label='Fine'>
        <Typo.Fine {...props} weight='bold' />
        <Typo.Fine {...props} weight='strong' />
        <Typo.Fine {...props} weight='regular' />
        <Typo.Fine {...props} weight='light' />
      </Section>
    </>
  ),
};

function Section(props: { label: string } & BaseProps<HAS_CHILDREN>) {
  const { label, children } = props;

  return (
    <Container vertical='wide'>
      <Container horizontal='none'>
        <Typo.Title weight='light' color={text.tertiary}>
          {label}
        </Typo.Title>
      </Container>
      <Column gap={12}>{children}</Column>
    </Container>
  );
}
