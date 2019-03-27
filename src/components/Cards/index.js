import React from 'react';
import cx from 'classnames';

function Title({ children }) {
  return (
    <>
      <h3 className="text-blue">{children}</h3>
      <div className="smallline bg-blue"></div>
    </>
  )
}

export class Card extends React.Component {
  static Title = Title;
  render() {
    return (
      <div className={cx("card", this.props.className)}>
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}