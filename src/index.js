import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StatusForm from './statusForm';
import PostList from './postList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masseges: [],
    };
  }

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

  postTime = () => {
    const time = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return(
      `${days[time.getDay()]} ${time.getHours()}:${time.getMinutes()}`
    );
  }

  updateStateNewPost = (massege, user) => {
    const newMasseges = [...this.state.masseges];

    newMasseges.unshift(
      {
        user: user,
        text: massege,
        totalLikes: 0,
        id: new Date().getUTCMilliseconds(),
        postTime: this.postTime(),
      }
    );

    this.setState({
      masseges: newMasseges,
    });
  }

  render() {
    return(
      <React.Fragment>
        <StatusForm updateParentState={this.updateStateNewPost}/>
        <PostList masseges={this.state.masseges} updateParentState={this.updateStateNewLike}/>
      </React.Fragment>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);