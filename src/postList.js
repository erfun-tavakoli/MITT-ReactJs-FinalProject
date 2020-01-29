import React, { Component } from 'react';
import Post from './post';

class PostList extends Component {
  renderPosts = () => {
    return(
      this.props.masseges.map(
        ele => {
          return <Post data={ele} addLike={this.props.updateParentState}/>
        }
      )
    );
  }

  render() {
    return (
      <div className="timeLine">
        {this.renderPosts()}
      </div>
    )
  }
};

export default PostList;