import React, { Component } from 'react';
import CommentForm from './commentForm';
import CommentList from './commentList';

class CommentBoard extends Component {
  render() {
    return(
      <div className="comment-board">
        <CommentList comments={this.props.comments} likeComment={this.props.likeComment} postId={this.props.postId}/>
        <CommentForm addComment={this.props.addComment}/>
      </div>
    );
  }
};

export default CommentBoard;