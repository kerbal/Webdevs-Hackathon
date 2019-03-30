import React from 'react';
import { Card } from '../Cards';
import cx from 'classnames';

import crown from '../../images/leaderboard/crown.svg';
import './leaderboard.css';

function Cell({ children, className, icon, ...props}) {
  return (
    <h4 className={cx("my-2 form-control bdr-max hover lb__cell", children)} {...props}>
      {icon && <img className="icon mr-2" src={crown} width="20" style={{marginTop:'-5px'}}/>}
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