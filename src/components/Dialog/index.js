import React from 'react';

import './dialog.css';

function Pannel({ children }) {
  return (
    <div className="dialog__pannel bg-white p-3">
      {children}
    </div>
  )
}

export class Dialog extends React.Component {
  static Pannel = Pannel;
  render() {
    return (
      <div className="dialog__wrapper w-100 d-flex justify-content-center align-items-center"
        onClick={this.props.onWrapperClick}>
        {this.props.children}
      </div>
    )
  }
}