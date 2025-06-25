import { Flex } from '../flex';
import type { FlexProps } from '../flex/shared';

export function Row(props: FlexProps) {
  return <Flex {...props} direction='row' />;
}
