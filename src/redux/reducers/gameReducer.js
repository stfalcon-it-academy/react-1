import { actionTypes } from '../actions/gameActions';

const wall = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

const defaultState = {
  playerName: '',
  wall,
  paused: true,
  points: 0,
  time: 0,
  finished: false,
};

export default function(state = defaultState, { type = '', payload: { playerName } = {} }) {
  switch (type) {
    case actionTypes.GAME_START:
      return {
        ...state,
        paused: false,
      };

    case actionTypes.GAME_PAUSE:
      return {
        ...state,
        paused: true,
      };

    case actionTypes.SET_PLAYER_NAME:
      return {
        ...state,
        playerName,
      };

    default:
      return state;
  }
}
