import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Game from '../components/GameField/GameField';
import PlayerNameForm from '../components/PlayerNameForm/PlayerNameForm';
import PauseMenu from '../components/Menu/PauseMenu';

import { setPlayerName, startGame, pauseGame } from '../redux/actions/gameActions';

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
    const { playerName, startGame } = this.props;
    if (!prevProps.playerName && playerName) {
      startGame();
    }
  }

  interactionHandler = e => {
    const { paused, startGame, pauseGame } = this.props;
    switch (e.key) {
      case 'ArrowUp':
        break;
      case 'ArrowLeft':
        break;
      case 'ArrowRight':
        break;
      case 'ArrowDown':
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
    document.documentElement.removeEventListener('keydown', this.interactionHandler);
  }

  render() {
    const { wall, playerName, paused, startGame } = this.props;
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
        {paused && playerName && <PauseMenu onResume={startGame} />}
      </Game>
    );
  }
}

const mapStateToProps = ({ gameState }) => ({
  ...gameState,
});
const mapDispatchToProps = dispatcher =>
  bindActionCreators(
    {
      setPlayerName,
      startGame,
      pauseGame,
    },
    dispatcher,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameContainer);
