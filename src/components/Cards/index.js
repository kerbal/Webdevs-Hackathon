import React from 'react';
import './card.css';
import cx from 'classnames';

function Tag({ children, className, width, height, ...props }) {
  return (
    <div className={cx("card-tag d-flex align-items-center justify-content-center", className)} 
      {...props} style={{ width, height }}>
      {children}
    </div>
  )
}

export class Card extends React.Component {
  static Tag = Tag;
  render() {
    return (
      <div className={cx("card bdr-8", this.props.className)}>
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}