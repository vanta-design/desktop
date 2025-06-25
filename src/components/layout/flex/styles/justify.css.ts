import { style } from '@/styles/layer.css';

export default {
  start: style({
    justifyContent: 'flex-start',
  }),
  center: style({
    justifyContent: 'center',
  }),
  end: style({
    justifyContent: 'flex-end',
  }),
  between: style({
    justifyContent: 'space-between',
  }),
  around: style({
    justifyContent: 'space-around',
  }),
  evenly: style({
    justifyContent: 'space-evenly',
  }),
};
