import React from 'react';
import cx from 'classnames';

export function Pagination({ total, current, pageSize, className }) {
  let pages = Math.round(total / pageSize);
  return (
    <ul className={cx("pagination", className)}>
      <li className="page-item">
        <a className="page-link text-main pointer px-3 font-weight-bold"
           style={{ borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px' }} 
           href="#">&lt;&lt;</a>
      </li>
      {Array.from(Array(pages)).map((_, idx) => (
        <li key={"pg-"+idx+1} 
          className="page-item">
          <a className={cx("page-link text-main pointer font-weight-bold", {"bg-grey": current===idx+1})}>{idx+1}</a>
        </li>
      ))}
      <li className="page-item">
        <a className="page-link text-main pointer px-3 font-weight-bold"
           style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }} 
           href="#">&gt;&gt;</a>
      </li>
    </ul>
  )
}