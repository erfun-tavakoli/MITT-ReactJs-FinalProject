import React, { Component } from 'react';

class PostDetail extends Component {
  render() {
    return(
      <div>
        <img className="avatar"></img>
        <p>
          <strong>
            {this.props.user}
          </strong>
        </p>
        <p>
          time
        </p>
      </div>
    );
  }
};

export default PostDetail;