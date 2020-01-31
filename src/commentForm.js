import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({textValue: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state.textValue)
  }

  render() {
    return(
      <form className="comment-form">
        <input type="text" placeholder="write Comment" value={this.state.textValue} onChange={this.handleChange}></input>
        <button className="submit-comment" onClick={this.handleSubmit}>upload</button>
      </form>
    );
  }
};

export default CommentForm;