import React from 'react';
import $ from 'jquery';
import TextInput from './common/TextInput';

class Layout extends React.Component {

  render() {
    return (
      <div className = "container-fluid">
        { this.props.children }
      </div>
    );
  }
}

export default Layout;
