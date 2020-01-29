import React, { Component } from 'react';
import FormHeader from './formHeader';
import TextInput from './textInput';

class StatusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'erfun',
    }
  }

  addPostData = (value) => {
    this.props.updateParentState(value, this.state.currentUser)
  }

  chnageUser = (user) => {
    this.setState({
      currentUser: user
    });
  };

  render() {
    return(
      <div className="form">
        <FormHeader updateUser={this.chnageUser}/>
        <TextInput addPost={this.addPostData}/>
      </div>
    );
  }
};

export default StatusForm;