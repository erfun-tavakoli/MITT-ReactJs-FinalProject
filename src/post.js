import React, { Component } from 'react';
import PostDetail from './postDetail';
import PostMassege from './postMassege';
import PostReply from './postReply';

class Post extends Component {
  addLike = () => {
    this.props.addLike(this.props.data.id);
  }

  commentSwitch = () => {
    this.props.commentSwitch(this.props.data.id);
  }

  addComment = (commentText) => {
    this.props.addComment(this.props.data.id, commentText)
  }

  render() {
    return(
      <div className="post">
        <PostDetail data={this.props.data}/>
        <PostMassege text={this.props.data.text}/>
        <PostReply data={this.props.data} addLike={this.addLike} commentSwitch={this.commentSwitch} addComment={this.addComment} likeComment={this.props.likeComment}/>
      </div>
    );
  }
};

export default Post;