import {
  getInitialWall,
  getInitialFigurePosition,
  getFigure,
  getNewPositionDown,
  getWallWithFigure,
  getNewPositionLeft,
  getNewPositionRight,
  getRotatedFigure,
  getWallWithCleanedLines,
  isEnoughFreeSpace,
} from '../../helpers/gameHelpers';
import { actionTypes } from '../actions/gameActions';

const defaultState = {
  playerName: '',
  wall: getInitialWall(),
  figure: null,
  figurePosition: {
    ...getInitialFigurePosition(),
  },
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

    case actionTypes.GAME_RESET:
      return {
        ...defaultState,
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

    case actionTypes.FIGURE_MOVE_LEFT:
    case actionTypes.FIGURE_MOVE_RIGHT:
    case actionTypes.FIGURE_MOVE_DOWN: {
      const { wall, figure, figurePosition } = state;
      if (figure) {
        const newPosition = {
          [actionTypes.FIGURE_MOVE_LEFT]: getNewPositionLeft,
          [actionTypes.FIGURE_MOVE_RIGHT]: getNewPositionRight,
          [actionTypes.FIGURE_MOVE_DOWN]: getNewPositionDown,
        }[type](wall, figure, figurePosition);
        return {
          ...state,
          ...(newPosition ? { figurePosition: { ...newPosition } } : {}),
        };
      } else {
        return {
          ...state,
        };
      }
    }

    case actionTypes.FIGURE_ROTATE: {
      const { wall, figure, figurePosition } = state;
      const newFigureAndPosition = getRotatedFigure(wall, figure, figurePosition);
      return {
        ...state,
        ...(newFigureAndPosition ? newFigureAndPosition : {}),
      };
    }

    case actionTypes.TIMER_TICK: {
      const { wall, figure, figurePosition, time, points } = state;
      let figureData = {};

      if (!state.figure) {
        // if figure wasn't set yet(means game was just started)
        // initialize figure and position
        figureData = {
          figure: getFigure(),
          figurePosition: {
            ...getInitialFigurePosition(),
          },
        };
      } else {
        // otherwise try to move figure down
        const newPosition = getNewPositionDown(wall, figure, figurePosition);
        if (newPosition) {
          // if possible move figure down
          figureData = {
            figurePosition: {
              ...newPosition,
            },
          };
        } else {
          // or finish figure falling and add new figure to start position
          const { wall: cleanedWall, counter } = getWallWithCleanedLines(
            getWallWithFigure(wall, figure, figurePosition),
          );
          const newFigure = getFigure();
          const newFigurePosition = getInitialFigurePosition();

          figureData = {
            figure: newFigure,
            figurePosition: {
              ...newFigurePosition,
            },
            points: points + counter * 10,
            wall: cleanedWall,
            finished: !isEnoughFreeSpace(cleanedWall, newFigure, newFigurePosition),
          };
        }
      }
      return {
        ...state,
        time: time + 1,
        ...figureData,
      };
    }

    default:
      return state;
  }
}
