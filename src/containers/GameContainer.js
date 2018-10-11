import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Game from '../components/GameField/GameField';
import PlayerNameForm from '../components/PlayerNameForm/PlayerNameForm';
import FinishMenu from '../components/Menu/FinishMenu';
import PauseMenu from '../components/Menu/PauseMenu';
import {
  setPlayerName,
  startGame,
  timerTick,
  rotateFigure,
  moveFigureLeft,
  moveFigureRight,
  moveFigureDown,
  pauseGame,
  resetGame,
} from '../redux/actions/gameActions';
import { getWallWithFigure } from '../helpers/gameHelpers';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.playerName,
    };
  }

  playerNameChangeHandler = ({ target: { value } }) =>
    this.setState({
      name: value,
    });

  startGameClickHandler = () => this.props.setPlayerName(this.state.name);

  componentDidUpdate(prevProps) {
    const { playerName, paused, finished, startGame, timerTick } = this.props;
    if (!prevProps.playerName && playerName) {
      startGame();
    }
    if (prevProps.paused && !paused) {
      this.gameTimer = setInterval(timerTick, 1000);
    }
    if ((!prevProps.paused && paused) || finished) {
      clearInterval(this.gameTimer);
    }
  }

  interactionHandler = e => {
    const { rotateFigure, moveFigureLeft, moveFigureRight, moveFigureDown, pauseGame, startGame, paused } = this.props;
    switch (e.key) {
      case 'ArrowUp':
        rotateFigure();
        break;
      case 'ArrowLeft':
        moveFigureLeft();
        break;
      case 'ArrowRight':
        moveFigureRight();
        break;
      case 'ArrowDown':
        moveFigureDown();
        break;
      case 'Escape':
        if (paused) {
          startGame();
        } else {
          pauseGame();
        }
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    document.documentElement.addEventListener('keydown', this.interactionHandler);
  }

  componentWillUnmount() {
    const { resetGame } = this.props;
    resetGame();
    document.documentElement.removeEventListener('keydown', this.interactionHandler);
  }

  render() {
    const { wall, playerName, finished, paused, startGame } = this.props;
    const { name } = this.state;
    return (
      <Game wall={wall}>
        {paused &&
          !playerName && (
            <PlayerNameForm
              value={name}
              onChange={this.playerNameChangeHandler}
              onStartGame={this.startGameClickHandler}
            />
          )}
        {finished && <FinishMenu />}
        {paused && playerName && <PauseMenu onResume={startGame} />}
      </Game>
    );
  }
}

const mapStateToProps = ({ gameState, gameState: { wall, figure, figurePosition } }) => ({
  ...gameState,
  ...(figure ? { wall: getWallWithFigure(wall, figure, figurePosition) } : {}),
});
const mapDispatchToProps = dispatcher =>
  bindActionCreators(
    {
      setPlayerName,
      startGame,
      timerTick,
      rotateFigure,
      moveFigureLeft,
      moveFigureRight,
      moveFigureDown,
      pauseGame,
      resetGame,
    },
    dispatcher,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameContainer);
