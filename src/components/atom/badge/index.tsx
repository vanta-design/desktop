import { withDefaultProps } from '@/utils/component';
import { _PrimitiveBadge } from './primitive';

const Badge = {
  Large: withDefaultProps(_PrimitiveBadge, { size: 'large' }),
  Small: withDefaultProps(_PrimitiveBadge, { size: 'small' }),
};

export { Badge };
