import type { Meta, StoryObj } from '@storybook/react';
import { Control } from '@/components/atom/control';

const meta: Meta = {
  title: 'Atom/Control',
};

export default meta;

export const Checkbox: StoryObj = {
  render: () => <Control.Checkbox>체크박스</Control.Checkbox>,
};

export const Radio: StoryObj = {
  render: () => <Control.Radio>라디오</Control.Radio>,
};

export const Switch: StoryObj = {
  render: () => <Control.Switch>스위치</Control.Switch>,
};
