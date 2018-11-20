import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

import React from 'react';

export default class Icone extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={this.props.icon} style={{color: this.props.color}}/> {this.props.text}
      </div>
    );
  }
}
