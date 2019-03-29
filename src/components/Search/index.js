import React from 'react';
import cx from 'classnames';

import './search.css';

export function Search({ className, ...props }) {
  return (
    <div className="search">
      <i className="fa fa-search text-main"></i>
      <input className={cx("form-control py-4 bsd-3", className)} 
        type="text" {...props} />
    </div>
  )
}