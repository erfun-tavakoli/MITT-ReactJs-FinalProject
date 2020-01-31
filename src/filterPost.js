import React, { Component } from 'react';

class FilterPost extends Component {
  handleChange = (event) => {
    this.props.changeFilterMethod(event.target.value);
  }

  render() {
    return(
      <form>
        <select onChange={this.handleChange}>
          <option value="recent" selected>recent</option>
          <option value="popular">most popular</option>
          <option value="user">user</option>
        </select> 
      </form>
    );
  }
};

export default FilterPost;