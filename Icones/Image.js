import React from 'react';

export default class Image extends React.Component {
  render() {
      const src = "https://www.bling.com.br/images/" + this.props.src;
    return (
      <div>
        {this.props.text}<br/>
        <img src={src} style={{height: '40px', width: '40px'}}></img>
      </div>
    );
  }
}

