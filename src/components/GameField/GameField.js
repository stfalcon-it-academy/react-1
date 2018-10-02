import React from 'react';
import PropTypes from 'prop-types';

import Brick from './Brick';
import './GameField.css';

const GameField = ({ wall = [], children }) => {
  return (
    <div className="game">
      <div className={`game-field ${children ? 'blurred' : ''}`}>
        {wall.map((line, y) => line.map((cell, x) => <Brick key={`${x}.${y}`} full={cell} />))}
      </div>
      {children && <div className="overlay">{children}</div>}
    </div>
  );
};

GameField.propTypes = {
  wall: PropTypes.array.isRequired,
};

export default GameField;
