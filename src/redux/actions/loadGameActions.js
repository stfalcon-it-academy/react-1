import { getGamesList, saveGameData, getGameDataById } from '../../helpers/serverAPIHelpers';

export const actionTypes = {
  GAME_DATA_REQUEST_START: 'GAME_DATA_REQUEST_START',
  GAME_DATA_REQUEST_ERROR: 'GAME_DATA_REQUEST_ERROR',
  GAME_DATA_FETCH_SUCCESS: 'GAME_DATA_FETCH_SUCCESS',
  GAME_DATA_SAVE_SUCCESS: 'GAME_DATA_SAVE_SUCCESS',

  GAMES_LIST_FETCH_SUCCESS: 'GAMES_LIST_FETCH_SUCCESS',
};

const requestStart = () => ({
  type: actionTypes.GAME_DATA_REQUEST_START,
});

const requestError = error => ({
  type: actionTypes.GAME_DATA_REQUEST_ERROR,
  payload: { error },
});

const savingSuccess = () => ({
  type: actionTypes.GAME_DATA_SAVE_SUCCESS,
});

const fetchingSuccess = gameData => ({
  type: actionTypes.GAME_DATA_FETCH_SUCCESS,
  payload: { gameData },
});

const fetchingGamesListSuccess = games => ({
  type: actionTypes.GAMES_LIST_FETCH_SUCCESS,
  payload: { games },
});

export const submitGameData = () => async (dispatch, getState) => {
  const { playerName, wall, figure, figurePosition, points, time } = getState().gameState;
  dispatch(requestStart());

  try {
    await saveGameData({ playerName, wall, figure, figurePosition, points, time });
    dispatch(savingSuccess());
  } catch ({ message }) {
    dispatch(requestError(message));
  }
};

export const fetchGamesList = () => async dispatch => {
  dispatch(requestStart());

  try {
    const { data } = await getGamesList();
    dispatch(fetchingGamesListSuccess(data));
  } catch ({ message }) {
    dispatch(requestError(message));
  }
};

export const fetchGameData = id => async dispatch => {
  dispatch(requestStart());

  try {
    const { data } = await getGameDataById(id);
    dispatch(fetchingSuccess(data));
  } catch ({ message }) {
    dispatch(requestError(message));
  }
};
