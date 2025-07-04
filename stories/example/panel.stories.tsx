import type { Meta, StoryObj } from '@storybook/react';
import { BookmarkCheck, Box, FileText, HardDrive } from 'lucide-react';
import { Badge } from '@/components/atom/badge';
import { Row } from '@/components/layout/row';
import { Panel } from '@/components/molecule/panel';

const meta: Meta = {
  title: 'Example/Panel',
};

export default meta;

export const Showcase: StoryObj = {
  render: () => (
    <Row>
      <Panel>
        <Panel.Header
          imageSrc='/vanta.png'
          name='Vanta Design'
          description='8K members ⋅ Free plan'
        />
        <Panel.Section title='Works'>
          <Panel.Section.Item leadingIcon={Box}>Projects</Panel.Section.Item>
          <Panel.Section.Item leadingIcon={BookmarkCheck} active>
            Tasks
          </Panel.Section.Item>
          <Panel.Section.Item
            leadingIcon={HardDrive}
            trailingArea={<Badge.Small semantic='positive'>Good</Badge.Small>}
          >
            Drive
          </Panel.Section.Item>
          <Panel.Section.Item
            leadingIcon={FileText}
            trailingArea={<Badge.Small semantic='neutral'>1.5K</Badge.Small>}
          >
            Documents
          </Panel.Section.Item>
        </Panel.Section>
      </Panel>
    </Row>
  ),
};
