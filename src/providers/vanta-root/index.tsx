import '@/styles/reset.css';
import '@/styles/token.css';
import '@/styles/theme.css';
import '@/styles/accent.css';
import type { PropsWithChildren } from 'react';

export function VantaProvider(props: PropsWithChildren) {
  const { children } = props;

  return children
}
