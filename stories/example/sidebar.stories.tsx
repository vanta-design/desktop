import type { Meta, StoryObj } from '@storybook/react';
import { BookmarkCheck, Box, FileText, HardDrive } from 'lucide-react';
import { Badge } from '@/components/atom/badge';
import { Row } from '@/components/layout/row';
import { Sidebar } from '@/components/molecule/sidebar';

const meta: Meta = {
  title: 'Example/Sidebar',
};

export default meta;

export const Showcase: StoryObj = {
  render: () => (
    <Row>
      <Sidebar>
        <Sidebar.Header
          imageSrc='/vanta.png'
          name='Vanta Design'
          description='8K members ⋅ Free plan'
        />
        <Sidebar.Menu title='Works'>
          <Sidebar.Menu.Item leadingIcon={Box}>Projects</Sidebar.Menu.Item>
          <Sidebar.Menu.Item leadingIcon={BookmarkCheck} active>
            Tasks
          </Sidebar.Menu.Item>
          <Sidebar.Menu.Item
            leadingIcon={HardDrive}
            trailingArea={<Badge.Small semantic='positive'>Good</Badge.Small>}
          >
            Drive
          </Sidebar.Menu.Item>
          <Sidebar.Menu.Item
            leadingIcon={FileText}
            trailingArea={<Badge.Small semantic='neutral'>1.5K</Badge.Small>}
          >
            Documents
          </Sidebar.Menu.Item>
        </Sidebar.Menu>
      </Sidebar>
    </Row>
  ),
};
