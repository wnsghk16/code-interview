import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <>
        <button>{this.props.Text}</button>
      </>
    )
  }
}

export default Button;
