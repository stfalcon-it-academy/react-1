import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const getLeaderBoard = () => api.get('/leaderboard');
export const saveGameResult = gameResult => api.post('/leaderboard', gameResult);

export const getGamesList = () => api.get('/games');
export const getGameDataById = id => api.get('/game', { params: { id } });
export const saveGameData = gameData => api.post('/game', gameData);
