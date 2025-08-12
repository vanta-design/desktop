import type { Meta, StoryObj } from '@storybook/react';
import { Indicator } from '@/components/atom/badge';
import { Profile } from '@/components/atom/profile';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';

const meta: Meta = {
  title: 'UI/Atom/Profile',
};

export default meta;

type ProfileStory = StoryObj<typeof Profile.Regular>;

export const Showcase: ProfileStory = {
  render: (props) => (
    <>
      <Container>
        <Row align='center' gap={16}>
          <Profile.Large {...props} />
          <Profile.Medium {...props} />
          <Profile.Regular {...props} />
          <Profile.Small {...props} />
        </Row>
      </Container>
      <Container>
        <Row align='center' gap={16}>
          <Profile.Large
            {...props}
            indicator={<Indicator.Large semantic='positive' />}
          />
          <Profile.Medium
            {...props}
            indicator={<Indicator.Medium semantic='caution' />}
          />
          <Profile.Regular
            {...props}
            indicator={<Indicator.Small semantic='negative' />}
          />
          <Profile.Small
            {...props}
            indicator={<Indicator.Small semantic='neutral' />}
          />
        </Row>
      </Container>
    </>
  ),
  args: {
    src: '/vanta.png',
    alt: 'Example',
  },
};
