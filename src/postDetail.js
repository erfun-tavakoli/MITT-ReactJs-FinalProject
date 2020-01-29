import React, { Component } from 'react';

class PostDetail extends Component {
  render() {
    return(
      <div>
        <img className="avatar"></img>
        <p>
          <strong>
            {this.props.data.user}
          </strong>
        </p>
        <p>
          {this.props.data.postTime}
        </p>
      </div>
    );
  }
};

export default PostDetail;