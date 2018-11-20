import React from 'react';

export default class Botao extends React.Component {
  render() {
    return (
      <div>
        <button className={this.props.class}>Procurar Arquivo</button>
      </div>
    );
  }
}

