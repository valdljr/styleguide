import React from 'react';

export default class Cor extends React.Component {
  render() {
      const backgroundColor = this.props.backgroundColor;
    return (
        <div style={{display: 'inline-block'}}>
            <span>{this.props.name}</span>
            <div style={{height: '120px', width: '120px', backgroundColor: backgroundColor, marginRight: '20px'}}></div>
            <span>{this.props.text}</span>
        </div>
    );
  }
}
