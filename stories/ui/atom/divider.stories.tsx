import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@/components/atom/divider';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';

const meta: Meta<typeof Divider> = {
  title: 'UI/Atom/Divider',
};

export default meta;

const paddings = ['none', 'small', 'medium', 'large'] as const;

export const Showcase: StoryObj = {
  render: () => (
    <Container vertical='large'>
      <Row>
        <Column gap={20} style={{ width: 200 }}>
          {paddings.map((p) => (
            <Divider key={p} padding={p} />
          ))}
        </Column>
      </Row>
    </Container>
  ),
};
