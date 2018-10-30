import { getLeaderBoard, saveGameResult } from '../../helpers/serverAPIHelpers';

export const actionTypes = {
  LEADER_BOARD_REQUEST_START: 'LEADER_BOARD_REQUEST_START',
  LEADER_BOARD_REQUEST_ERROR: 'LEADER_BOARD_REQUEST_ERROR',
  LEADER_BOARD_FETCH_SUCCESS: 'LEADER_BOARD_FETCH_SUCCESS',
  LEADER_BOARD_SAVE_SUCCESS: 'LEADER_BOARD_SAVE_SUCCESS',
  LEADER_BOARD_RESET: 'LEADER_BOARD_RESET',
};

const requestStart = () => ({
  type: actionTypes.LEADER_BOARD_REQUEST_START,
});

const requestError = error => ({
  type: actionTypes.LEADER_BOARD_REQUEST_ERROR,
  payload: { error },
});

const savingSuccess = () => ({
  type: actionTypes.LEADER_BOARD_SAVE_SUCCESS,
});

const fetchingSuccess = leaders => ({
  type: actionTypes.LEADER_BOARD_FETCH_SUCCESS,
  payload: { leaders },
});

export const leaderBoardReset = () => ({
  type: actionTypes.LEADER_BOARD_RESET,
});

export const submitGameResult = gameData => async dispatch => {
  dispatch(requestStart());

  try {
    await saveGameResult(gameData);
    dispatch(savingSuccess());
  } catch ({ message }) {
    dispatch(requestError(message));
  }
};

export const fetchLeaderBoard = () => async dispatch => {
  dispatch(requestStart());

  try {
    const { data } = await getLeaderBoard();
    dispatch(fetchingSuccess(data));
  } catch ({ message }) {
    dispatch(requestError(message));
  }
};
