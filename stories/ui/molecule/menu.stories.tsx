import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/atom/button';
import { Container } from '@/components/layout/container';
import { Menu } from '@/components/molecule/menu';

const meta: Meta = {
  title: 'UI/Molecule/Menu',
};

export default meta;

export const Showcase: StoryObj = {
  render: () => (
    <Container>
      <Menu.Static items={[{ label: 'Item 1' }, { label: 'Item 2' }]}>
        <Menu.Trigger>
          <Button.Large>Open Menu</Button.Large>
        </Menu.Trigger>
      </Menu.Static>
    </Container>
  ),
};
