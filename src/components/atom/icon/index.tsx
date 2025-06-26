import type { LucideIcon, LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  icon?: LucideIcon | null;
}

export function Icon(props: IconProps) {
  const { icon: Icon, ...restProps } = props;

  if (!Icon) {
    return null;
  }

  return <Icon {...restProps} />;
}
