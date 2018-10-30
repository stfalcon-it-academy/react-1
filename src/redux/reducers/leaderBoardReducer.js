import { actionTypes } from '../actions/leaderBoardActions';

const defaultState = {
  leaders: [],
  requestInProgress: false,
  savingSuccess: false,
  error: '',
};

export default (state = defaultState, { type = '', payload = {} }) => {
  const { leaders, error } = payload;
  switch (type) {
    case actionTypes.LEADER_BOARD_REQUEST_START:
      return {
        ...state,
        requestInProgress: true,
      };

    case actionTypes.LEADER_BOARD_FETCH_SUCCESS:
      return {
        ...state,
        leaders,
        requestInProgress: false,
      };

    case actionTypes.LEADER_BOARD_SAVE_SUCCESS:
      return {
        ...state,
        savingSuccess: true,
        requestInProgress: false,
      };

    case actionTypes.LEADER_BOARD_REQUEST_ERROR:
      return {
        ...state,
        error,
        requestInProgress: false,
      };

    case actionTypes.LEADER_BOARD_RESET:
      return {
        ...defaultState,
      };

    default:
      return state;
  }
};
