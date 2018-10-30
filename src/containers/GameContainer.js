import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';

import Game from '../components/GameField/GameField';
import PlayerNameForm from '../components/PlayerNameForm/PlayerNameForm';
import FinishMenu from '../components/Menu/FinishMenu';
import PauseMenu from '../components/Menu/PauseMenu';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
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
import { submitGameResult, leaderBoardReset } from '../redux/actions/leaderBoardActions';
import { submitGameData, fetchGameData } from '../redux/actions/loadGameActions';
import { getWallWithFigure } from '../helpers/gameHelpers';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.playerName,
      idToLoad: props.match.params.id,
    };
  }

  playerNameChangeHandler = ({ target: { value } }) =>
    this.setState({
      name: value,
    });

  startGameClickHandler = () => this.props.setPlayerName(this.state.name);

  componentDidUpdate(prevProps) {
    const { playerName, points, time, paused, finished, startGame, timerTick, submitGameResult } = this.props;
    if (!prevProps.playerName && playerName) {
      !this.state.idToLoad && startGame();
    }
    if (prevProps.paused && !paused) {
      this.gameTimer = setInterval(timerTick, 1000);
    }
    if ((!prevProps.paused && paused) || finished) {
      clearInterval(this.gameTimer);
    }
    if (!prevProps.finished && finished) {
      submitGameResult({
        playerName,
        points,
        time,
      });
    }
  }

  interactionHandler = e => {
    const {
      rotateFigure,
      moveFigureLeft,
      moveFigureRight,
      moveFigureDown,
      pauseGame,
      startGame,
      paused,
      playerName,
    } = this.props;
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
        if (playerName) {
          if (paused) {
            startGame();
          } else {
            pauseGame();
          }
        }
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    const { idToLoad } = this.state;
    document.documentElement.addEventListener('keydown', this.interactionHandler);
    if (idToLoad) {
      this.props.fetchGameData(idToLoad);
    }
  }

  componentWillUnmount() {
    const { resetGame, leaderBoardReset } = this.props;
    clearInterval(this.gameTimer);
    leaderBoardReset();
    resetGame();
    document.documentElement.removeEventListener('keydown', this.interactionHandler);
  }

  render() {
    const {
      wall,
      playerName,
      finished,
      paused,
      startGame,
      requestInProgress,
      leaderBoardSavingSuccess,
      loadGameSavingSuccess,
      submitGameData,
    } = this.props;
    const { name, idToLoad } = this.state;
    if (!loadGameSavingSuccess) {
      return (
        <Game wall={wall}>
          {requestInProgress && <LoadingSpinner />}
          {!idToLoad &&
            paused &&
            !playerName && (
              <PlayerNameForm
                value={name}
                onChange={this.playerNameChangeHandler}
                onStartGame={this.startGameClickHandler}
              />
            )}
          {finished && leaderBoardSavingSuccess && <FinishMenu />}
          {paused && playerName && <PauseMenu onResume={startGame} onSave={submitGameData} />}
        </Game>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = ({
  gameState,
  gameState: { wall, figure, figurePosition },
  leaderBoardState: {
    requestInProgress: leaderBoardInProgress,
    savingSuccess: leaderBoardSavingSuccess,
    error: leaderBoardError,
  },
  loadGameState: { requestInProgress: loadGameInProgress, savingSuccess: loadGameSavingSuccess, error: loadGameError },
}) => ({
  ...gameState,
  ...(figure ? { wall: getWallWithFigure(wall, figure, figurePosition) } : {}),
  requestInProgress: leaderBoardInProgress || loadGameInProgress,
  leaderBoardSavingSuccess,
  loadGameSavingSuccess,
  error: leaderBoardError || loadGameError,
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
      submitGameResult,
      leaderBoardReset,
      submitGameData,
      fetchGameData,
    },
    dispatcher,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(GameContainer));
