import React, { Component } from 'react';
import SearchPanel from './components/search-panel';
import Burger from './components/burger';
import Main from './components/main';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Burger/>
        <Main/ >
        <SearchPanel/>
      </div>
    );
  }
}

export default App;
