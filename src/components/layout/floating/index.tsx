import { fullWidth } from '@/styles/utils.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { wrapper } from './styles.css';

export function Floating(props: BaseProps<HAS_CHILDREN>) {
  const { className, ...restProps } = props;

  return <div {...restProps} className={cn(wrapper, fullWidth, className)} />;
}
