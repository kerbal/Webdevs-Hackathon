import React from 'react';
import cx from 'classnames';

export function Footer({ classame, ...props }) {
  return (
    <footer {...props} className={cx("py-4 text-center text-white bg-main", classame)}>
      <h5>Webdevs Hackathon 2019</h5>
      <h5 className="mb-0"><small>&copy; Javascript team</small></h5>
    </footer>
  )
}