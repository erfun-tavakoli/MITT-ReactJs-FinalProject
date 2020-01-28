import React, { Component } from 'react';

class SelectUser extends Component {
  handleChange = (event) => {
    this.props.changeUser(event.target.value);
  }

  render() {
    return (
      <form>
        <select onChange={this.handleChange}>
          <option value="erfun">Erfun</option>
          <option value="shola">Shola</option>
          <option value="dragon">Dragon</option>
          <option value="dolphin">Dolphin</option>
        </select> 
      </form>
    );
  }
};

export default SelectUser;