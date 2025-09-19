import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '@/components/atom/input';
import { InputField } from '@/components/molecule/input-field';

const meta: Meta<typeof InputField> = {
  title: 'UI/Molecule/InputField',
  args: {
    label: '라벨',
    description: '설명',
  },
};

export default meta;

export const Showcase: StoryObj<typeof InputField> = {
  render: (props) => (
    <InputField {...props} style={{ width: 400 }}>
      <TextInput placeholder='플레이스홀더' />
    </InputField>
  ),
};
