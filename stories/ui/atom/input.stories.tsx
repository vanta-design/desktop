import type { Meta, StoryObj } from '@storybook/react';
import { Search } from 'lucide-react';
import { Input } from '@/components/atom/input';
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
        <Input.Text
          placeholder='플레이스홀더'
          icon={Search}
          style={{ width: 300 }}
        />
        <Input.Text.Compact
          placeholder='플레이스홀더'
          icon={Search}
          style={{ width: 300 }}
        />
      </Column>
    </Container>
  ),
};
