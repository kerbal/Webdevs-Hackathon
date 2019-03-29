import React from 'react';
import './card.css';
import cx from 'classnames';

function Title({ children }) {
  return (
    <>
      <h3 className="text-cn-red">{children}</h3>
      <div className="smallline bg-cn-red"></div>
    </>
  )
}

export class Card extends React.Component {
  static Title = Title;
  render() {
    return (
      <div className={cx("card bg-cn-yellow cn", this.props.className)}>
        <div className="card-body">
          <div className="cn-border">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}