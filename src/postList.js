import React, { Component } from 'react';
import Post from './post';
import FilterPost from './filterPost';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMethod: 'recent',
    };
  }

  renderByLikes = () => {
    let sortedArr = [...this.props.masseges];
    
    sortedArr.sort(
      (a, b) => {
        return (b.totalLikes - a.totalLikes);
      }
    );

    return(
      sortedArr.map(
        ele => {
          return (
            <Post data={ele} addLike={this.props.addLike} commentSwitch={this.props.commentSwitch} addComment={this.props.addComment} likeComment={this.props.likeComment}/>
          );
        }
      )
    );
  }

  renderByUser = () => {
    return(
      this.props.masseges.map(
        ele => {
          if (ele.user === this.props.currentUser) {
            return (
              <Post data={ele} addLike={this.props.addLike} commentSwitch={this.props.commentSwitch} addComment={this.props.addComment} likeComment={this.props.likeComment}/>
            );
          };
        }
      )
    );
  }

  renderByTime = () => {
    return(
      this.props.masseges.map(
        ele => {
          return (
            <Post data={ele} addLike={this.props.addLike} commentSwitch={this.props.commentSwitch} addComment={this.props.addComment} likeComment={this.props.likeComment}/>
          );
        }
      )
    );
  }

  changeFilterMethod = (type) => {
    this.setState(
      {
        filterMethod: type,
      }
    );
  }

  renderPosts = () => {
    if (this.state.filterMethod === 'recent') {
      return this.renderByTime();
    } else if (this.state.filterMethod === 'popular') {
      return this.renderByLikes();
    } else {
      return this.renderByUser();
    };    
  }

  render() {
    return (
      <div className="timeLine">
        <FilterPost changeFilterMethod={this.changeFilterMethod}/>
        {this.renderPosts()}
      </div>
    );
  }
};

export default PostList;