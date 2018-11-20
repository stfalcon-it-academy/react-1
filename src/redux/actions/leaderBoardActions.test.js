import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';

import { actionTypes, leaderBoardReset, fetchLeaderBoard } from './leaderBoardActions';
import { api } from '../../helpers/serverAPIHelpers';

describe('leader board actions', () => {
  let store;
  let httpMock;

  beforeEach(() => {
    httpMock = new MockAdapter(api);
    store = configureMockStore()({});
  });

  it('reset store', () => {
    store.dispatch(leaderBoardReset());
    expect(store.getActions()).toEqual([{ type: actionTypes.LEADER_BOARD_RESET }]);
  });

  it('fetch leader board', async () => {
    const leaders = [
      { playerName: 'teacher', points: 10, time: 38, finished: 1540145959359, id: 'id-1540145959360-e05hdtpys' },
    ];
    httpMock.onGet('/leaderboard').reply(200, leaders);

    await fetchLeaderBoard()(store.dispatch);

    expect(store.getActions()).toEqual([
      { type: actionTypes.LEADER_BOARD_REQUEST_START },
      {
        type: actionTypes.LEADER_BOARD_FETCH_SUCCESS,
        payload: {
          leaders,
        },
      },
    ]);
  });
});
