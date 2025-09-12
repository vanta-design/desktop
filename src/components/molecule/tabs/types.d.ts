import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import type { NonEmptyArray } from '@/types/utils';

type TabItem = {
  icon?: LucideIcon;
  label: string;
  value: string;
  disabled?: boolean;
  content: ReactNode;
};

interface TabsPropsBase {
  tabs: NonEmptyArray<TabItem>;
  onChange?: (value: string) => unknown;
}

interface HorizontalTabsProps extends TabsPropsBase {
  horizontal?: true;
  vertical?: never;
}

interface VerticalTabsProps extends TabsPropsBase {
  vertical: true;
  horizontal?: never;
}

export type TabsProps = HorizontalTabsProps | VerticalTabsProps;
