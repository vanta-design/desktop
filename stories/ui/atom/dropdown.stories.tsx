import type { Meta, StoryObj } from '@storybook/react';
import { SquareDashed } from 'lucide-react';
import { Dropdown } from '@/components/atom/dropdown';
import { Column } from '@/components/layout/column';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';

const meta: Meta = {
  title: 'UI/Atom/Dropdown',
};

export default meta;

export const Showcase: StoryObj = {
  render: () => (
    <Row>
      <Column gap={spacing[16]} style={{ width: 300 }}>
        <Dropdown defaultIcon={SquareDashed} placeholder='플레이스홀더'>
          <Dropdown.Item value='apple'>사과</Dropdown.Item>
          <Dropdown.Item value='banana'>바나나</Dropdown.Item>
          <Dropdown.Item value='cherry'>체리</Dropdown.Item>
          <Dropdown.Item value='grape'>포도</Dropdown.Item>
        </Dropdown>
        <Dropdown.Compact defaultIcon={SquareDashed} placeholder='플레이스홀더'>
          <Dropdown.Item value='apple'>사과</Dropdown.Item>
          <Dropdown.Item value='banana'>바나나</Dropdown.Item>
          <Dropdown.Item value='cherry'>체리</Dropdown.Item>
          <Dropdown.Item value='grape'>포도</Dropdown.Item>
        </Dropdown.Compact>
      </Column>
    </Row>
  ),
};
