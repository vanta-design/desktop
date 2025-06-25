import { withDefaultProps } from '@/utils/component';
import { _DefaultButton } from './kinds/default';
import { _IconButton } from './kinds/icon';

const Button = {
  Large: withDefaultProps(_DefaultButton, { size: 'large' }),
  Medium: withDefaultProps(_DefaultButton, { size: 'medium' }),
  Small: withDefaultProps(_DefaultButton, { size: 'small' }),
};

const IconButton = {
  Large: withDefaultProps(_IconButton, { size: 'large' }),
  Medium: withDefaultProps(_IconButton, { size: 'medium' }),
  Small: withDefaultProps(_IconButton, { size: 'small' }),
};

export { Button, IconButton };
