import { fillHeight, fullScreen } from '@/styles/utils.css';
import { Container, type ContainerProps } from '../container';
import { Flex } from '../flex';

interface CenterProps extends ContainerProps {}

export function Center(props: CenterProps) {
  const { children, ...restProps } = props;

  return (
    <Container {...restProps} className={fullScreen}>
      <Flex className={fillHeight}>{children}</Flex>
    </Container>
  );
}
