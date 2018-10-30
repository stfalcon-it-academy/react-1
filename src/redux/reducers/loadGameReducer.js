import { actionTypes } from '../actions/loadGameActions';

const defaultState = {
  games: [],
  requestInProgress: false,
  savingSuccess: false,
  error: '',
};

export default (state = defaultState, { type = '', payload = {} }) => {
  const { games, error } = payload;
  switch (type) {
    case actionTypes.GAME_DATA_REQUEST_START:
      return {
        ...state,
        requestInProgress: true,
        savingSuccess: false,
      };

    case actionTypes.GAMES_LIST_FETCH_SUCCESS:
      return {
        ...state,
        games,
        requestInProgress: false,
      };

    case actionTypes.GAME_DATA_FETCH_SUCCESS:
      return {
        ...state,
        requestInProgress: false,
      };

    case actionTypes.GAME_DATA_SAVE_SUCCESS:
      return {
        ...state,
        savingSuccess: true,
        requestInProgress: false,
      };

    case actionTypes.GAME_DATA_REQUEST_ERROR:
      return {
        ...state,
        error,
        requestInProgress: false,
      };

    default:
      return state;
  }
};
