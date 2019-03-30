import React from 'react';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="custom-control custom-radio mt-2">
        <input 
          type="radio" 
          className="custom-control-input" 
          name={this.props.name} 
          value={this.props.value} 
          checked={this.props.checked}
          id={this.props.index}
          onClick={this.props.onClick}
        />
        <h4 className="custom-control-label" htmlFor={this.props.index}>{this.props.label}</h4>
      </div>
    )
  }
}

export default RadioButton;