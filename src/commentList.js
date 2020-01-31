import React, { Component } from 'react';
import Like from './likeComment';

class CommentList extends Component {
  likeComment = (commentId) => {
    this.props.likeComment(this.props.postId, commentId)
  }

  renderComents = () => {
    let sortedArray = this.props.comments.sort(
      (a, b) => {
        return (b.likes - a.likes);
      }
    );
    
    return sortedArray.map(
      comment => {
        return(
          <div className="comment">
            <p>
              posted by: {comment.user}
            </p>
            {comment.text}
            <div>
              <Like likes={comment.likes} addLike={this.likeComment} id={comment.id}/>
            </div>
          </div>
        )
      }
    );
  }

  render() {
    return(
      <div className="comment-list">
        {this.renderComents()}
      </div>
    );
  }
};

export default CommentList;