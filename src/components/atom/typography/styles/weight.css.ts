import { weight } from '@/tokens/typography.css';
import { style } from '@/utils/style';
import type { Weight } from '../shared';

const weights: Array<Weight> = ['bold', 'strong', 'regular', 'light'];

export default weights.reduce(
  (acc, current) => {
    acc[current] = style({ fontWeight: weight[current] });
    return acc;
  },
  {} as { [key in Weight]: string },
);
