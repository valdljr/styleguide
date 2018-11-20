import React from 'react';

export class Texto extends React.Component {
  render() {
    return (
      <p style={{fontSize: this.props.fontSize}}>{this.props.text}</p>
    );
  }
}

export class Br extends React.Component {
  render() {
    return ( <br/> );
  }
}
