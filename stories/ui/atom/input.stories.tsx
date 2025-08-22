import type { Meta, StoryObj } from '@storybook/react';
import { Search } from 'lucide-react';
import { ImagePreviewInput, TextInput } from '@/components/atom/input';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';

const meta: Meta = {
  title: 'UI/Atom/Input',
};

export default meta;

export const Text: StoryObj = {
  render: () => (
    <Container>
      <Column gap={16} align='center'>
        <TextInput
          placeholder='플레이스홀더'
          icon={Search}
          style={{ width: 300 }}
        />
        <TextInput.Compact
          placeholder='플레이스홀더'
          icon={Search}
          style={{ width: 300 }}
        />
      </Column>
    </Container>
  ),
};

export const ImagePreview: StoryObj = {
  render: () => <ImagePreviewInput />,
};
