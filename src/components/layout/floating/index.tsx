import { type PropsWithChildren, useEffect, useState } from 'react';
import { fullWidth } from '@/styles/utils.css';
import { cn } from '@/utils/common';
import { wrapper } from './styles.css';

export function Floating(props: PropsWithChildren) {
  const { children } = props;

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
      <div className={cn(wrapper, fullWidth)}>{children}</div>
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
