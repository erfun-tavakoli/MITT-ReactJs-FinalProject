import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StatusForm from './statusForm';
import PostList from './postList';
import data from './initalData';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'erfun',
      masseges: data,
    };
  }

  commentSwitch = (postId) => {
    let newStateMasseges = [...this.state.masseges];
    
    newStateMasseges.forEach(
      (massege) => {
        if (massege.id === postId) {
          if (massege.commentBoard) {
            return Object.assign(massege, {commentBoard: false});
          }

          return Object.assign(massege, {commentBoard: true});
        };
      }
    );

    this.setState({masseges: newStateMasseges});
  }

  chnageActiveUser = (user) => {
    this.setState({
      currentUser: user
    });
  };

  updateStateNewLike = (postId) => {
    let newStateMasseges = [...this.state.masseges];
    
    newStateMasseges.forEach(
      (massege) => {
        if (massege.id === postId) {
          let newTotalLike = (massege.totalLikes + 1);

          return Object.assign(massege, {totalLikes: newTotalLike});
        };
      }
    );

    this.setState({masseges: newStateMasseges});
  }

  updateStateLikeComment = (postId, commentId) => {
    let newStateMasseges = [...this.state.masseges];

    newStateMasseges.forEach(
      (massege) => {
        if (massege.id === postId) {
          let commentsArray = [...massege.comments];
          
          commentsArray.forEach(
            comment => {
              if (comment.id === commentId) {
                let newLikes = (comment.likes + 1);

                return Object.assign(comment, {likes: newLikes});
              }
            }
          )

          return Object.assign(massege, {comments: commentsArray});
        };
      }
    );

    this.setState({masseges: newStateMasseges});
  }

  updateStateNewComment = (postId, commentText) => {
    let newStateMasseges = [...this.state.masseges];
    
    newStateMasseges.forEach(
      (massege) => {
        if (massege.id === postId) {
          let newCommentsArray = [...massege.comments];

          newCommentsArray.push(
            {
              text: commentText,
              user: this.state.currentUser,
              likes: 0,
              id: new Date().getUTCMilliseconds(),
            }
          )

          return Object.assign(massege, {comments: newCommentsArray});
        };
      }
    );

    this.setState({masseges: newStateMasseges});
  }

  postTime = () => {
    const time = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return(
      `${days[time.getDay()]} ${time.getHours()}:${time.getMinutes()}`
    );
  }

  updateStateNewPost = (massege) => {
    const newMasseges = [...this.state.masseges];

    newMasseges.unshift(
      {
        user: this.state.currentUser,
        text: massege,
        totalLikes: 0,
        id: new Date().getUTCMilliseconds(),
        postTime: this.postTime(),
        comments: [],
        commentBoard: false,
      }
    );

    this.setState({
      masseges: newMasseges,
    });
  }

  render() {
    return(
      <React.Fragment>
        <StatusForm updateParentState={this.updateStateNewPost} chnageActiveUser={this.chnageActiveUser}/>
        <PostList masseges={this.state.masseges} addLike={this.updateStateNewLike} commentSwitch={this.commentSwitch} addComment={this.updateStateNewComment} likeComment={this.updateStateLikeComment}
        currentUser={this.state.currentUser}/>
      </React.Fragment>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);