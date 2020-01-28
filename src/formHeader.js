import React, { Component } from 'react';
import SelectUser from './selectUser'

class FormHeader extends Component {
  changeUser = (user) => {
    this.props.updateUser(user);
  }

  render() {
    return(
      <header>
        <h1>Social News Feed</h1>
        <SelectUser changeUser={this.changeUser}/>
      </header>
    );
  }
};

export default FormHeader;