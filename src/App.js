import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import enLocale from 'react-intl/locale-data/en';
import ukLocale from 'react-intl/locale-data/uk';

import AppHeader from './components/AppHeader/AppHeader';
import MainMenu from './components/Menu/MainMenu';
import Game from './containers/GameContainer';
import LeaderBoard from './containers/LeaderBoardContainer';
import LoadGame from './containers/LoadGameContainer';
import enMessages from './lang/en';
import ukMessages from './lang/uk';
import './App.css';

const messages = {
  en: enMessages,
  uk: ukMessages,
};
addLocaleData([...enLocale, ...ukLocale]);

const locale = 'uk';

class App extends Component {
  render() {
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
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
      </IntlProvider>
    );
  }
}

export default App;
