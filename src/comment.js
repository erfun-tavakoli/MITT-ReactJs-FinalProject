import React from 'react';
import CommentToggleButton from './commentToggleButton';
import CommentBoard from './commentsBoard';

function Comment(props) {
  if(props.commentBoard) {
     return(
      <div className='comment'>
        <CommentToggleButton value='hide' commentSwitch={props.commentSwitch}/>
        <CommentBoard addComment={props.addComment} comments={props.comments} likeComment={props.likeComment} postId={props.id}/>
      </div>
    );
  };

  return(
    <div className="comment">
      <CommentToggleButton value='comment' commentSwitch={props.commentSwitch}/>
    </div>
  );
};

export default Comment;