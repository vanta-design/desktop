import { Container } from '@/components/layout/container';
import { divider } from './styles.css';

interface DividerProps {
  padding?: 'none' | 'narrow' | 'regular' | 'wide';
}

export function Divider(props: DividerProps) {
  const { padding = 'none' } = props;

  return (
    <Container vertical={padding} horizontal='none'>
      <hr className={divider} />
    </Container>
  );
}
