import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from './components/AppHeader/AppHeader';
import MainMenu from './components/Menu/MainMenu';
import Game from './containers/GameContainer';
import LeaderBoard from './containers/LeaderBoardContainer';
import LoadGame from './containers/LoadGameContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Router>
          <div className="app-body">
            <Route exact path="/" component={MainMenu} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/game/:id" component={Game} />
            <Route path="/leader-board" component={LeaderBoard} />
            <Route path="/load" component={LoadGame} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
