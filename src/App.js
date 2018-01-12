import React, { Component } from 'react';
import './App.css';

import * as Components from './components/Buttons.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Components.BrowseFilePannel/>
      </div>
    );
  }
}

export default App;
