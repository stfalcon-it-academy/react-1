import React from 'react';
import { configure } from 'enzyme';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Adapter from 'enzyme-adapter-react-16';

import GameContainer from './GameContainer';
import { mountWithIntl } from '../helpers/testHelpers';
import store from '../redux/store';

configure({ adapter: new Adapter() });

describe('Game container component', () => {
  it('handles playerName update', () => {
    const history = createBrowserHistory();
    const gameContainer = mountWithIntl(
      <Router history={history}>
        <GameContainer store={store} />
      </Router>,
    ).find('GameContainer');
    const instance = gameContainer.instance();
    expect(gameContainer.state('name')).toEqual('');
    instance.playerNameChangeHandler({ target: { value: 'test' } });
    expect(gameContainer.state('name')).toEqual('test');
  });
});
