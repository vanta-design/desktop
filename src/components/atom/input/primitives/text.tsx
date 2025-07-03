import { type LucideIcon, X } from 'lucide-react';
import {
  type ChangeEvent,
  type InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { cn } from '@/utils/common';
import { Icon } from '../../icon';
import {
  content,
  disabledStyle,
  focusStyle,
  input,
  invalidStyle,
  reset,
  wrapper,
} from './styles/text.css';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  secure?: boolean;
}

interface _PrimitiveTextInputProps extends TextInputProps {
  gap: string;
  iconSize: number;
  resetIconSize: number;
}

export function _PrimitiveTextInput(props: _PrimitiveTextInputProps) {
  const {
    type,
    disabled,
    icon,
    secure = type === 'password',
    gap,
    iconSize,
    resetIconSize,
    style,
    value: propValue,
    defaultValue,
    className,
    ...restProps
  } = props;

  const wrapperRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(String(propValue || defaultValue || ''));
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const checkValidation = useCallback(() => {
    if (inputRef.current && value.length > 0) {
      setIsValid(inputRef.current.validity.valid);
    } else {
      setIsValid(true);
    }
  }, [value]);

  const onClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      checkValidation();
    },
    [checkValidation],
  );

  const onClickReset = useCallback(() => {
    setValue('');
  }, []);

  useEffect(() => {
    checkValidation();
  }, [checkValidation]);

  const classNames = [
    className,
    wrapper,
    {
      [focusStyle]: isFocused,
      [disabledStyle]: disabled,
      [invalidStyle]: isValid === false,
    },
  ];

  return (
    <Row
      ref={wrapperRef}
      className={cn(classNames)}
      gap={spacing[8]}
      align='center'
      style={style}
      onClick={onClick}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <Row className={content} gap={gap} align='center' justify='start'>
        <Icon
          icon={icon}
          size={iconSize}
          color={isFocused || value.length > 0 ? text.primary : text.tertiary}
        />
        <input
          {...restProps}
          ref={inputRef}
          className={input}
          type={secure ? 'password' : type}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </Row>
      {value.length > 0 && !disabled ? (
        <X
          className={reset}
          size={resetIconSize}
          color={text.secondary}
          onClick={onClickReset}
        />
      ) : null}
    </Row>
  );
}
