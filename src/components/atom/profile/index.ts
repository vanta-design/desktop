import { withDefaultProps } from '@/utils/component';
import { _ProfileGroup } from './group';
import { _PrimitiveProfile } from './primitive';

const Profile = {
  Small: withDefaultProps(_PrimitiveProfile, { size: 'small' }),
  Regular: withDefaultProps(_PrimitiveProfile, { size: 'regular' }),
  Medium: withDefaultProps(_PrimitiveProfile, { size: 'medium' }),
  Large: withDefaultProps(_PrimitiveProfile, { size: 'large' }),
  Group: _ProfileGroup,
};

export { Profile };
