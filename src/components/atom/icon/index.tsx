import type { LucideIcon, LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  icon?: LucideIcon | null;
}

export function Icon(props: IconProps) {
  const { icon: Icon, ...restProps } = props;

  if (!Icon) {
    return (
      <svg
        width={props.size || 24}
        height={props.size || 24}
        viewBox='0 0 24 24'
      />
    );
  }

  return <Icon {...restProps} />;
}
