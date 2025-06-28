import type { Meta, StoryObj } from '@storybook/react';
import { Control } from '@/components/atom/control';
import { ControlGroup } from '@/components/molecule/control-group';

const meta: Meta<typeof ControlGroup> = {
  title: 'UI/Molecule/ControlGroup',
  argTypes: {
    direction: {
      options: ['row', 'column'],
      control: 'select',
    },
  },
  args: {
    direction: 'column',
    name: 'example',
  },
};

export default meta;

export const Showcase: StoryObj<typeof ControlGroup> = {
  render: (props) => (
    <ControlGroup {...props}>
      <Control.Radio value='1'>선택 1</Control.Radio>
      <Control.Radio value='2'>선택 2</Control.Radio>
      <Control.Radio value='3'>선택 3</Control.Radio>
      <Control.Radio value='4'>선택 4</Control.Radio>
    </ControlGroup>
  ),
};
