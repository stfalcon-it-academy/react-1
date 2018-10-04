import React, { Component } from 'react';

import Game from '../components/GameField/GameField';
import PlayerNameForm from '../components/PlayerNameForm/PlayerNameForm';
import FinishMenu from '../components/Menu/FinishMenu';
import PauseMenu from '../components/Menu/PauseMenu';

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

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      paused: false,
      started: false,
    };
  }

  playerNameChangeHandler = ({ target: { value } }) =>
    this.setState({
      name: value,
    });

  interactionHandler = e => {
    const { name, paused } = this.state;
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
        this.setState({
          paused: name ? !paused : false,
        });
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
    const { name, paused, started } = this.state;
    return (
      <Game wall={wall}>
        {!started && (
          <PlayerNameForm
            value={name}
            onChange={this.playerNameChangeHandler}
            onStartGame={() => {
              this.setState({
                started: true,
              });
            }}
          />
        )}
        {paused && started && <PauseMenu onResume={() => {}} />}
      </Game>
    );
  }
}

export default GameContainer;
