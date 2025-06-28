import {
  type PropsWithChildren,
  useCallback,
  useContext,
  useId,
  useRef,
} from 'react';
import { Row } from '@/components/layout/row';
import { ControlGroupContext } from '@/components/molecule/control-group/context';
import { spacing } from '@/tokens/attribute.css';
import { Label } from '../../label';
import { boundingBox } from '../styles/primitive.css';
import { radio } from '../styles/radio.css';

interface _RadioProps extends PropsWithChildren {
  value?: string;
  defaultActive?: boolean;
}

export function _Radio(props: _RadioProps) {
  const { value, defaultActive, children } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const controlId = useId();
  const { name } = useContext(ControlGroupContext);

  const onClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return (
    <Row gap={spacing[6]} align='center' justify='start' onClick={onClick}>
      <div className={boundingBox}>
        <input
          type='radio'
          id={controlId}
          className={radio}
          ref={inputRef}
          name={name}
          value={value}
          defaultChecked={defaultActive}
        />
      </div>
      {children && <Label htmlFor={controlId}>{children}</Label>}
    </Row>
  );
}
