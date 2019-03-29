import React from 'react';
import cx from 'classnames';

export function Button({ children, className, ...props }) {
  return (
    <button className={cx("btn bg-main text-white bdr-max", className)} {...props}>{children}</button>
  )
}