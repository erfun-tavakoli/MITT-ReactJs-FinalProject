import React, { Component } from 'react';
import SelectUser from './selectUser'

class FormHeader extends Component {
  render() {
    return(
      <header>
        <nav className="nav-bar">
          <h1>Social News Feed</h1>
          <SelectUser chnageActiveUser={this.props.chnageActiveUser}/>
        </nav>
      </header>
    );
  }
};

export default FormHeader;