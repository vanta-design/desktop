import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@/components/atom/chip';
import { Row } from '@/components/layout/row';

const meta: Meta = {
  title: 'Atom/Chip',
};

export default meta;

type Category = 'all' | 'live' | 'music' | 'gaming' | 'news';

export const Showcase: StoryObj = {
  render: () => (
    <Row>
      <Chip.Group<Category> defaultActive='all'>
        <Chip value='all'>All</Chip>
        <Chip value='live'>Live</Chip>
        <Chip value='music'>Music</Chip>
        <Chip value='gaming'>Gaming</Chip>
        <Chip value='news'>News</Chip>
      </Chip.Group>
    </Row>
  ),
};
