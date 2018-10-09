import React, { Component } from 'react';

import AppHeader from './components/AppHeader/AppHeader';
import Game from './containers/GameContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div className="app-body">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
