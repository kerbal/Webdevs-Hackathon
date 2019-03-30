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

  handleClick = e => {
    let isWrapper = false;
    for (let c of e.target.classList) {
      if (c === 'dialog__wrapper') {
        isWrapper = true;
        break;
      }
    }
    if (isWrapper) {
      this.props.onWrapperClick(e);
    }
  }

  render() {
    return (
      <div className="dialog__wrapper w-100 d-flex justify-content-center align-items-center"
        onClick={this.handleClick}>
        {this.props.children}
      </div>
    )
  }
}