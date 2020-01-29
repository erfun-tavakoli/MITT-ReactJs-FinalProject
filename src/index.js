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

  updateState = (massege, user) => {
    const newMasseges = [...this.state.masseges];

    newMasseges.unshift(
      {
        user: user,
        text: massege,
      }
    );

    this.setState({
      masseges: newMasseges,
    });
  }

  render() {
    return(
      <React.Fragment>
        <StatusForm updateParentState={this.updateState}/>
        <PostList masseges={this.state.masseges}/>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);