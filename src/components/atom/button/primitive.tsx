import { cn } from '@/utils/common';
import type { ButtonPropsBase } from './shared';
import { button } from './styles/button.css';
import sizeMap from './styles/size.css';
import variantMap from './styles/variant.css';

export function _PrimitiveButton(props: ButtonPropsBase) {
  const {
    variant = 'primary',
    size = 'large',
    className,
    ...restProps
  } = props;

  const classNames = [variantMap[variant], sizeMap[size], button, className];

  return <button {...restProps} className={cn(classNames)} />;
}
