import { Flex } from '@/components/layout/flex';
import { typography } from '@/tokens/typography.css';
import { vector } from './styles.css';

type LoadingCircleSize = 'body' | 'caption' | 'footnote';

interface LoadingCircleProps {
  size?: LoadingCircleSize;
  color?: string;
}

export function LoadingCircle(props: LoadingCircleProps) {
  const { color = 'currentColor', size = 'body' } = props;

  return (
    <Flex
      inline
      align='center'
      justify='center'
      style={{
        width: typography.lineHeight[size],
        height: typography.lineHeight[size],
        padding: `calc(${typography.lineHeight[size]} / 6)`,
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={vector}
        viewBox='0 0 24 24'
        fill='none'
      >
        <title>Loading...</title>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M14.9664 2.86981C13.0384 2.24337 10.9614 2.24339 9.03335 2.86988C7.10528 3.49636 5.42504 4.71715 4.23343 6.35727C3.04182 7.99738 2.40001 9.97258 2.4 12C2.39999 14.0273 3.04176 16.0025 4.23335 17.6426C5.42494 19.2828 7.10516 20.5035 9.03322 21.1301C10.9613 21.7566 13.0381 21.7566 14.9663 21.1302C16.8943 20.5038 18.5747 19.2831 19.7663 17.6431C20.958 16.0029 21.5999 14.0277 21.6 12.0005C21.6 11.3377 22.1374 10.8005 22.8 10.8006C23.4628 10.8006 24 11.3378 24 12.0006C23.9999 14.5347 23.1976 17.0037 21.7079 19.0538C20.2183 21.1039 18.118 22.6298 15.7079 23.4128C13.2977 24.1958 10.7016 24.1957 8.29152 23.4126C5.88145 22.6295 3.78118 21.1034 2.29169 19.0532C0.8022 17.0031 -2.39995e-05 14.534 5.38487e-10 11.9999C2.40005e-05 9.4658 0.802272 6.99673 2.29178 4.94659C3.78131 2.89643 5.88161 1.37047 8.29169 0.587358C10.7017 -0.19575 13.2979 -0.195786 15.708 0.58725C16.3384 0.792042 16.6832 1.46902 16.4785 2.09932C16.2737 2.72963 15.5968 3.07459 14.9664 2.86981Z'
          fill={color}
        />
      </svg>
    </Flex>
  );
}
