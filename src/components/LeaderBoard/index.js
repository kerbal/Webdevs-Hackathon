import React from 'react';
import { Card } from '../Cards';
import cx from 'classnames';

function Cell({ children, className, ...props}) {
  return (
    <h4 className={cx("my-3 form-control bdr-max hover", children)} {...props}>
      {children}
    </h4>
  )
}

export class LeaderBoard extends React.Component {
  static Cell = Cell;
  render() {
    const { children, ...props } = this.props;
    return (
        <Card {...props}>
          {children}
        </Card>
    )
  }
}