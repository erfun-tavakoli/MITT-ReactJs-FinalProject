import React, { Component } from 'react';
import PostDetail from './postDetail';
import PostMassege from './postMassege';

class Post extends Component {
  render() {
    return(
      <div className="post">
        <PostDetail user={this.props.data.user}/>
        <PostMassege text={this.props.data.text}/>
      </div>
    );
  }
};

export default Post;