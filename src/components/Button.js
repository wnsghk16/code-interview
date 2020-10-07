import React from 'react';

const Button = props => {

  return (
      <>
          <button style={{backgroundColor : props.FontColor }} onClick={props.OnClick}>{props.Text}</button>
      </>
  )
}

export default Button;
