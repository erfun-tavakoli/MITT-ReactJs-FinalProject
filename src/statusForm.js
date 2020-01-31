import React, { Component } from 'react';
import FormHeader from './formHeader';
import TextInput from './textInput';

class StatusForm extends Component {
  addPostData = (value) => {
    this.props.updateParentState(value)
  }

  chnageUser = (user) => {
    this.setState({
      currentUser: user
    });
  };

  render() {
    return(
      <div className="form">
        <FormHeader updateUser={this.chnageUser} chnageActiveUser={this.props.chnageActiveUser}/>
        <TextInput addPost={this.addPostData}/>
      </div>
    );
  }
};

export default StatusForm;