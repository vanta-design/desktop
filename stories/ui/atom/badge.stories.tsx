import type { Meta, StoryObj } from '@storybook/react';
import { SquareDashed } from 'lucide-react';
import { Badge, IconBadge, Indicator } from '@/components/atom/badge';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import { semanticColors } from '@/lib/color';
import { spacing } from '@/tokens/attribute.css';

const meta: Meta = {
  title: 'UI/Atom/Badge',
  args: {
    children: '뱃지',
    icon: SquareDashed,
  },
};

export default meta;

type BadgeStory = StoryObj<typeof Badge.Large>;
type IconBadgeStory = StoryObj<typeof IconBadge.Large>;
type IndicatorStory = StoryObj<typeof Indicator>;

export const Default: BadgeStory = {
  render: (props) => (
    <>
      <Container>
        <Row gap={spacing[8]}>
          {semanticColors.map((s) => (
            <Badge.Large key={s} {...props} semantic={s} />
          ))}
        </Row>
      </Container>
      <Container>
        <Row gap={spacing[8]}>
          {semanticColors.map((s) => (
            <Badge.Small key={s} {...props} semantic={s} />
          ))}
        </Row>
      </Container>
    </>
  ),
};

export const Icon: IconBadgeStory = {
  render: (props) => (
    <>
      <Container>
        <Row gap={spacing[8]}>
          {semanticColors.map((s) => (
            <IconBadge.Large key={s} {...props} semantic={s} />
          ))}
        </Row>
      </Container>
      <Container>
        <Row gap={spacing[8]}>
          {semanticColors.map((s) => (
            <IconBadge.Small key={s} {...props} semantic={s} />
          ))}
        </Row>
      </Container>
    </>
  ),
};

export const StatusIndicator: IndicatorStory = {
  render: (props) => (
    <>
      <Container>
        <Row gap={spacing[8]}>
          {semanticColors.map((s) => (
            <Indicator.Large key={s} {...props} semantic={s} />
          ))}
        </Row>
      </Container>
      <Container>
        <Row gap={spacing[8]}>
          {semanticColors.map((s) => (
            <Indicator.Medium key={s} {...props} semantic={s} />
          ))}
        </Row>
      </Container>
      <Container>
        <Row gap={spacing[8]}>
          {semanticColors.map((s) => (
            <Indicator.Small key={s} {...props} semantic={s} />
          ))}
        </Row>
      </Container>
    </>
  ),
};
