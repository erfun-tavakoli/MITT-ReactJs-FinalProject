import React, { Component } from 'react';

function PostMassege(props) {
  return(
    <p className="post-massege">
      {props.text}
    </p>
  );
};

export default PostMassege;