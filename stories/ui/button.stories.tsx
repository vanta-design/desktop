import type { Meta, StoryObj } from '@storybook/react';
import { SquareDashed } from 'lucide-react';
import { Button } from '@/components/atom/button';

const meta: Meta = {
  title: 'Atom/Button',
};

export default meta;

type ButtonStory = StoryObj<typeof Button.Large>;

export const Default: ButtonStory = {
  render: () => (
    <Button.Large leadingIcon={SquareDashed} trailingIcon={SquareDashed}>
      버튼
    </Button.Large>
  ),
};
