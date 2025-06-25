import { withDefaultProps } from '@/utils/component';
import { _DefaultButton } from './kinds/default';

const Button = {
  Large: withDefaultProps(_DefaultButton, { size: 'large' }),
  Medium: withDefaultProps(_DefaultButton, { size: 'medium' }),
  Small: withDefaultProps(_DefaultButton, { size: 'small' }),
};

export { Button };
