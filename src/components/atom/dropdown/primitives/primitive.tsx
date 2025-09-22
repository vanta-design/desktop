import { ChevronDown, ChevronUp } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Column } from '@/components/layout/column';
import { Row } from '@/components/layout/row';
import { fillWidth } from '@/styles/utils.css';
import { text } from '@/tokens/color.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { Icon } from '../../icon';
import { Typo } from '../../typography';
import { DropdownContext, type Option } from '../context';
import { controller, expanded, wrapper } from './styles/primitive.css';

export interface DropdownProps extends BaseProps<HAS_CHILDREN> {
  label?: string;
  defaultValue?: string;
  placeholder?: string;
}

export interface _PrimitiveDropdownProps extends DropdownProps {
  gap: string;
  indicatorSize: number;
}

export function _PrimitiveDropdown(props: _PrimitiveDropdownProps) {
  const {
    gap,
    indicatorSize,
    label,
    defaultValue,
    placeholder,
    className,
    children,
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [currentOption, setCurrentOption] = useState<Option | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handleDocumentClick = useCallback((e: MouseEvent) => {
    if (
      e.target instanceof Element &&
      wrapperRef.current &&
      !wrapperRef.current.contains(e.target)
    ) {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    if (!isExpanded) return;
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isExpanded, handleDocumentClick]);

  return (
    <DropdownContext
      value={{
        defaultValue,
        currentOption,
        isExpanded,
        setCurrentOption,
        setIsExpanded,
      }}
    >
      <div className={wrapper} ref={wrapperRef}>
        <Row
          as='button'
          className={cn(
            controller,
            isExpanded && expanded,
            className,
            fillWidth,
          )}
          gap={gap}
          align='center'
          justify='start'
          role='combobox'
          aria-haspopup='listbox'
          aria-expanded={isExpanded}
          onClick={handleClick}
        >
          <Column className={fillWidth}>
            <Typo.Footnote weight='light' color={text.tertiary}>
              {label}
            </Typo.Footnote>
            <Typo.Body
              className={fillWidth}
              color={currentOption ? text.primary : text.status.disabled}
            >
              {currentOption?.label ?? placeholder}
            </Typo.Body>
          </Column>
          <Icon
            icon={isExpanded ? ChevronUp : ChevronDown}
            size={indicatorSize}
            color={text.tertiary}
          />
        </Row>
        {children}
      </div>
    </DropdownContext>
  );
}
