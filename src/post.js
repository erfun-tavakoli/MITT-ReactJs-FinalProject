import React, { Component } from 'react';
import PostDetail from './postDetail';
import PostMassege from './postMassege';

class Post extends Component {
  handleClick = (e) => {
    this.props.addLike(this.props.data.id);
    e.preventDefault();
  }

  render() {
    return(
      <div className="post">
        <PostDetail data={this.props.data}/>
        <PostMassege text={this.props.data.text}/>
        <button onClick={this.handleClick}>
          {this.props.data.totalLikes}
        </button>
      </div>
    );
  }
};

export default Post;