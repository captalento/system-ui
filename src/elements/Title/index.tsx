import React from 'react';
import classNames from 'classnames';
import { Size, Variant } from '../../common';

export interface TitleProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  icon?: string;
  size?: Exclude<Size, 'xl'>;
  variant?: Variant;
}

function Title({
  tag,
  icon,
  size = 'md',
  className,
  variant = 'white',
  ...props
}: TitleProps): JSX.Element {
  const titleClasses = classNames(
    'title',
    {
      [`is-${size}`]: true,
      [`is-${variant}`]: true,
    },
    className
  );

  return React.createElement(tag, { className: titleClasses, ...props });
}

export { Title };
