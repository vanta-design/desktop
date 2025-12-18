import type { Meta, StoryObj } from '@storybook/react';
import {
  BookmarkCheck,
  Box,
  FileText,
  HardDrive,
  Menu as MenuIcon,
  MessageCircle,
  MessageSquare,
  Mic,
} from 'lucide-react';
import { Badge } from '@/components/atom/badge';
import { IconButton } from '@/components/atom/button';
import { Profile } from '@/components/atom/profile';
import { Row } from '@/components/layout/row';
import { Menu } from '@/components/molecule/menu';
import { Panel } from '@/components/molecule/panel';

const meta: Meta = {
  title: 'Example/Panel',
};

export default meta;

export const Showcase: StoryObj = {
  render: () => (
    <Row>
      <div style={{ width: 300, height: 500 }}>
        <Panel>
          <Panel.Header
            imageSrc='/vanta.png'
            name='Vanta Design'
            description='8K members ⋅ Free plan'
            trailingArea={
              <Menu.Static
                items={[
                  { label: 'Invite' },
                  { label: 'Settings' },
                  { label: 'Leave', isDestructive: true },
                ]}
              >
                <Menu.Trigger>
                  <IconButton.Small variant='bare' icon={MenuIcon} />
                </Menu.Trigger>
              </Menu.Static>
            }
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
          <Panel.Section title='Chats'>
            <Panel.Section.Item leadingIcon={MessageCircle}>
              General
            </Panel.Section.Item>
            <Panel.Section.Item leadingIcon={MessageCircle}>
              Random
            </Panel.Section.Item>
            <Panel.Section.Item leadingIcon={Mic}>General</Panel.Section.Item>
            <Panel.Section.Item leadingIcon={Mic}>Meetup</Panel.Section.Item>
            <Panel.Section.Item leadingIcon={Mic}>
              Playground
            </Panel.Section.Item>
            <Panel.Section.Item leadingIcon={MessageSquare}>
              Brainstorming
            </Panel.Section.Item>
          </Panel.Section>
          <Panel.Section title='Directs'></Panel.Section>
          <Panel.Footer
            profile={<Profile.Large src='/vanta.png' alt='VD' />}
            name='Vanta Design'
          />
        </Panel>
      </div>
    </Row>
  ),
};
