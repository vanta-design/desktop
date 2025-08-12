import type { Meta, StoryObj } from '@storybook/react';
import { Indicator } from '@/components/atom/badge';
import { Profile } from '@/components/atom/profile';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';

const meta: Meta = {
  title: 'UI/Atom/Profile',
};

export default meta;

type ProfileStory = StoryObj<typeof Profile.Regular>;
type ProfileGroupStory = StoryObj<typeof Profile.Group>;

export const Showcase: ProfileStory = {
  render: (props) => (
    <>
      <Container>
        <Row align='center' gap={8}>
          <Profile.Large {...props} />
          <Profile.Medium {...props} />
          <Profile.Regular {...props} />
          <Profile.Small {...props} />
        </Row>
      </Container>
      <Container>
        <Row align='center' gap={8}>
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

export const Group: ProfileGroupStory = {
  render: () => (
    <Container>
      <Column align='center' gap={16}>
        <Profile.Group>
          <Profile.Large src='/vanta.png' alt='Example' />
          <Profile.Large src='/vanta.png' alt='Example' />
          <Profile.Large src='/vanta.png' alt='Example' />
        </Profile.Group>
        <Profile.Group>
          <Profile.Medium src='/vanta.png' alt='Example' />
          <Profile.Medium src='/vanta.png' alt='Example' />
          <Profile.Medium src='/vanta.png' alt='Example' />
        </Profile.Group>
        <Profile.Group>
          <Profile.Regular src='/vanta.png' alt='Example' />
          <Profile.Regular src='/vanta.png' alt='Example' />
          <Profile.Regular src='/vanta.png' alt='Example' />
        </Profile.Group>
        <Profile.Group>
          <Profile.Small src='/vanta.png' alt='Example' />
          <Profile.Small src='/vanta.png' alt='Example' />
          <Profile.Small src='/vanta.png' alt='Example' />
        </Profile.Group>
      </Column>
    </Container>
  ),
};
