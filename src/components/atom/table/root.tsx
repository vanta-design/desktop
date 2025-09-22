import type { PropsWithChildren } from 'react';
import { fillWidth } from '@/styles/utils.css';
import { cn } from '@/utils/common';
import { root } from './styles/root.css';

interface TableRootProps extends PropsWithChildren {}

export function _TableRoot(props: TableRootProps) {
  const { children } = props;

  return <table className={cn(root, fillWidth)}>{children}</table>;
}
