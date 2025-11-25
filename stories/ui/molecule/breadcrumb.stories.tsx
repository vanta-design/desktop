import type { Meta, StoryObj } from '@storybook/react';
import { SquareDashed } from 'lucide-react';
import { Breadcrumb } from '@/index';

const meta: Meta = {
  title: 'UI/Molecule/Breadcrumb',
};

export default meta;

export const Showcase: StoryObj = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Segment icon={SquareDashed}>세그먼트</Breadcrumb.Segment>
      <Breadcrumb.Segment icon={SquareDashed} disabled>
        세그먼트
      </Breadcrumb.Segment>
      <Breadcrumb.Segment icon={SquareDashed}>세그먼트</Breadcrumb.Segment>
    </Breadcrumb>
  ),
};
