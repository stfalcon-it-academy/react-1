export const actionTypes = {
  SET_PLAYER_NAME: 'SET_PLAYER_NAME',
  GAME_START: 'GAME_START',
  GAME_PAUSE: 'GAME_PAUSE',

  GAME_RESET: 'GAME_RESET',
  FIGURE_MOVE_LEFT: 'FIGURE_MOVE_LEFT',
  FIGURE_MOVE_RIGHT: 'FIGURE_MOVE_RIGHT',
  FIGURE_MOVE_DOWN: 'FIGURE_MOVE_DOWN',
  FIGURE_ROTATE: 'FIGURE_ROTATE',
  TIMER_TICK: 'TIMER_TICK',
};

export const setPlayerName = playerName => ({
  type: actionTypes.SET_PLAYER_NAME,
  payload: {
    playerName,
  },
});

export const startGame = () => ({
  type: actionTypes.GAME_START,
});

export const pauseGame = () => ({
  type: actionTypes.GAME_PAUSE,
});

export const resetGame = () => ({
  type: actionTypes.GAME_RESET,
});

export const timerTick = () => ({
  type: actionTypes.TIMER_TICK,
});

export const moveFigureLeft = () => ({
  type: actionTypes.FIGURE_MOVE_LEFT,
});

export const moveFigureRight = () => ({
  type: actionTypes.FIGURE_MOVE_RIGHT,
});

export const moveFigureDown = () => ({
  type: actionTypes.FIGURE_MOVE_DOWN,
});

export const rotateFigure = () => ({
  type: actionTypes.FIGURE_ROTATE,
});
