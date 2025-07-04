import type { Meta, StoryObj } from '@storybook/react';
import { TorlnSymbol } from '@/components/atom/torln-symbol';

const meta: Meta<typeof TorlnSymbol> = {
  title: 'UI/Atom/TorlnSymbol',
  args: {
    withLabel: true,
  },
};

export default meta;

export const Showcase: StoryObj<typeof TorlnSymbol> = {
  render: (props) => <TorlnSymbol {...props} />,
};
