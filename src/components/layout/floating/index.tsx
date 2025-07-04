import { useEffect, useState } from 'react';
import { fullWidth } from '@/styles/utils.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { wrapper } from './styles.css';

export function Floating(props: BaseProps<HAS_CHILDREN>) {
  const { className, children } = props;

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const buttonGroupHeight = document.querySelector(
        `.${wrapper}`,
      )?.clientHeight;
      if (buttonGroupHeight) {
        setHeight(buttonGroupHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={cn(wrapper, fullWidth, className)}>{children}</div>
      <div
        style={{
          height: height,
          backgroundColor: 'transparent',
          flexShrink: 0,
        }}
      />
    </>
  );
}
