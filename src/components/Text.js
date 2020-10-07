import React from 'react';

class Text extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            color: this.props.TextColor,
            margin: this.props.Margin
          }}
        >
          {this.props.TextTitle}
        </div>
      </>
    )
  }
}

export default Text;
