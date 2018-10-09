import { createStore, combineReducers } from 'redux';

import gameState from './reducers/gameReducer';

const rootReducer = combineReducers({ gameState });

export default (process.env.NODE_ENV === 'development'
  ? createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  : createStore(rootReducer));
