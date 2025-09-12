import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@/components/layout/container';
import { Tabs } from '@/components/molecule/tabs';

const meta: Meta = {
  title: 'UI/Molecule/Tabs',
};

export default meta;

type TabsStory = StoryObj<typeof Tabs.Rail>;

export const RailTabs: TabsStory = {
  render: () => (
    <Container>
      <Tabs.Rail
        tabs={[
          { label: '첫번째 탭', value: '1', content: '첫번째 탭 내용' },
          {
            label: '두번째 탭',
            value: '2',
            disabled: true,
            content: '두번째 탭 내용',
          },
          { label: '세번째 탭', value: '3', content: '세번째 탭 내용' },
          { label: '네번째 탭', value: '4', content: '네번째 탭 내용' },
          { label: '다섯번째 탭', value: '5', content: '다섯번째 탭 내용' },
        ]}
      />
    </Container>
  ),
};
