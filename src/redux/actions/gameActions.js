export const actionTypes = {
  SET_PLAYER_NAME: 'SET_PLAYER_NAME',
  GAME_START: 'GAME_START',
  GAME_PAUSE: 'GAME_PAUSE',
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
