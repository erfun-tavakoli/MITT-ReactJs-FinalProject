import React, { Component } from 'react';
import FormHeader from './formHeader';
import TextInput from './textInput';

class StatusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'erfun',
      masseges: [],
    }
  }

  addPost = (value) => {
    const newMasseges = [...this.state.masseges];
    newMasseges.unshift(
      {
        user: this.state.currentUser,
        text: value,
      }
    );

    this.setState({
      masseges: newMasseges,
    });
  }

  chnageUser = (user) => {
    this.setState({
      currentUser: user
    });
  };

  render() {
    console.log(this.state.masseges)
    return(
      <div className="form">
        <FormHeader updateUser={this.chnageUser}/>
        <TextInput addPost={this.addPost}/>
      </div>
    );
  }
};

export default StatusForm;