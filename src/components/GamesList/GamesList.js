import React from 'react';
import moment from 'moment';

import './GameList.css';
import PropTypes from 'prop-types';

const GamesList = ({ data }) => (
  <div className="game-list">
    <ul>
      {data.map(({ id, playerName, points, time, finished }) => (
        <li key={id}>
          <div className="name">Ім'я: {playerName}</div>
          <div className="result">Результат: {points}</div>
          <div className="time">Час: {time}</div>
          <div className="finished">Завершено: {moment(finished).format('MMMM Do YYYY, h:mm')}</div>
        </li>
      ))}
    </ul>
  </div>
);

GamesList.propTypes = {
  wall: PropTypes.array.isRequired,
};

export default GamesList;
