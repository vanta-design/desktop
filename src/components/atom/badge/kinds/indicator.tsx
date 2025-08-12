import { withDefaultProps } from '@/utils/component';
import { _PrimitiveIndicator } from '../primitives/indicator';

export const _Indicator = {
  Small: withDefaultProps(_PrimitiveIndicator, { size: 'small' }),
  Medium: withDefaultProps(_PrimitiveIndicator, { size: 'medium' }),
  Large: withDefaultProps(_PrimitiveIndicator, { size: 'large' }),
};
