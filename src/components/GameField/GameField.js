import React from 'react';
import PropTypes from 'prop-types';

import Brick from './Brick';
import './GameField.css';

const GameField = ({ wall = [], children }) => {
  let hasChildren = false;
  if (children) {
    hasChildren = true;
    if (children.length) {
      hasChildren = children.reduce((acc, child) => acc || child);
    }
  }

  return (
    <div className="game">
      <div className={`game-field ${hasChildren ? 'blurred' : ''}`}>
        {wall.map((line, y) => line.map((cell, x) => <Brick key={`${x}.${y}`} full={!!cell} />))}
      </div>
      {hasChildren && <div className="overlay">{children}</div>}
    </div>
  );
};

GameField.propTypes = {
  wall: PropTypes.array.isRequired,
};

export default GameField;
