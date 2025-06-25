import '@/styles/reset.css';
import '@/styles/token.css';
import '@/styles/theme.css';
import '@/styles/accent.css';

export function VantaProvider(props: BaseProps<HAS_CHILDREN>) {
  const { children } = props;
  return children;
}
