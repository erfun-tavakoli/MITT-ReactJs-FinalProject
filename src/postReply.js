import React, { Component } from 'react';
import Like from './like';
import Comment from './comment';

class PostReply extends Component {
  render() {
    return(
      <div>
        <Like likes={this.props.data.totalLikes} addLike={this.props.addLike} id={this.props.data.id}/>
        <Comment commentBoard={this.props.data.commentBoard} comments={this.props.data.comments} commentSwitch={this.props.commentSwitch} addComment={this.props.addComment} likeComment={this.props.likeComment}
        id={this.props.data.id}/>
      </div>
    );
  }
};

export default PostReply;