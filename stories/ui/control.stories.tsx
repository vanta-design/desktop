import type { Meta, StoryObj } from '@storybook/react';
import { Control } from '@/components/atom/control';

const meta: Meta = {
  title: 'Atom/Control',
};

export default meta;

export const Checkbox: StoryObj = {
  render: () => <Control.Checkbox>Checkbox</Control.Checkbox>,
};

export const Switch: StoryObj = {
  render: () => <Control.Switch>Switch</Control.Switch>,
};
