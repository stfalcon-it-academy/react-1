import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';

import gameState from './reducers/gameReducer';
import leaderBoardState from './reducers/leaderBoardReducer';
import loadGameState from './reducers/loadGameReducer';

const rootReducer = combineReducers({ gameState, leaderBoardState, loadGameState });

export default (process.env.NODE_ENV === 'development'
  ? createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk),
    )
  : createStore(rootReducer, applyMiddleware(thunk)));
