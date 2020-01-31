import React, { Component } from 'react';

class CommentToggleButton extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.commentSwitch();
  }

  render() {
    return(
      <button className="toggle" onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
};

export default CommentToggleButton;