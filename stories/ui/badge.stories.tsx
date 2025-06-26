import type { Meta, StoryObj } from '@storybook/react';
import { SquareDashed } from 'lucide-react';
import { Badge } from '@/components/atom/badge';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import { semanticColors } from '@/lib/color';
import { spacing } from '@/tokens/attribute.css';

const meta: Meta = {
  title: 'Atom/Badge',
  args: {
    children: '뱃지',
    icon: SquareDashed,
  },
};

export default meta;

type BadgeStory = StoryObj<typeof Badge.Large>;

export const Showcase: BadgeStory = {
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
