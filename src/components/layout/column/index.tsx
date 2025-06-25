import { Flex } from '../flex';
import type { FlexProps } from '../flex/shared';

export function Column(props: FlexProps) {
  return <Flex {...props} direction='column' />;
}
