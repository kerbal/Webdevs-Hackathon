import React from 'react';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div class="custom-control custom-radio">
        <input 
          type="radio" 
          class="custom-control-input" 
          name={this.props.name} 
          value={this.props.value} 
          checked={this.props.checked}  
        />
        <label class="custom-control-label" htmlFor="customRadio">{this.props.label}</label>
      </div>
    )
  }
}

export default RadioButton;