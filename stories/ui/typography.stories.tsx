import type { Meta, StoryObj } from '@storybook/react';
import { Typo } from '@/components/atom/typography';

const meta: Meta = {
  title: 'Atom/Typography',
  args: {
    children: '백합꽃이 피어도 밤이 오면 지는구나',
  },
};

export default meta;

type TypographyStory = StoryObj<typeof Typo.Body>;

export const Display: TypographyStory = {
  render: (props) => <Typo.Display {...props} />,
};
