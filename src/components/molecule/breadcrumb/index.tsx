import { ChevronRight } from 'lucide-react';
import { Children, Fragment, type PropsWithChildren } from 'react';
import { Icon } from '@/components/atom/icon';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { _BreadcrumbSegment } from './segment';

interface BreadcrumbProps extends PropsWithChildren {}

export function Breadcrumb(props: BreadcrumbProps) {
  const { children } = props;

  return (
    <Row as='nav' gap={spacing[8]}>
      {Children.map(children, (child, index) => (
        <Fragment key={index.toString()}>
          {child}
          {index < Children.count(children) - 1 && (
            <Icon icon={ChevronRight} size={12} color={text.tertiary} />
          )}
        </Fragment>
      ))}
    </Row>
  );
}

Breadcrumb.Segment = _BreadcrumbSegment;
