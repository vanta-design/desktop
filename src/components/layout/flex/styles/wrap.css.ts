import { style } from '@/styles/layer.css';

export default {
  nowrap: style({
    flexWrap: 'nowrap',
  }),
  wrap: style({
    flexWrap: 'wrap',
  }),
  reverse: style({
    flexWrap: 'wrap-reverse',
  }),
};
