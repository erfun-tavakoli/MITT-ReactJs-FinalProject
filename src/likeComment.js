import React, { Component } from 'react';

class Like extends Component {
  handleClick  = (event) => {
    event.preventDefault();
    this.props.addLike(this.props.id)
  }

  render() {
    return(
      <React.Fragment>
        <button onClick={this.handleClick}>
          Like
        </button>
        <span>
          {this.props.likes}
        </span>
      </React.Fragment>
    );
  }
};

export default Like;