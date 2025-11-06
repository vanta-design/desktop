import { Container } from '@/components/layout/container';
import { divider } from './styles.css';

interface DividerProps {
  width?: string | number;
  height?: string | number;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export function Divider(props: DividerProps) {
  const { width, height, padding = 'none' } = props;

  return (
    <Container vertical={padding} horizontal='none' style={{ width, height }}>
      <hr className={divider} style={{ width, height }} />
    </Container>
  );
}
