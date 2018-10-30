import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './GameList.css';

const ItemContent = ({ data: { playerName, points, time, finished } }) => (
  <Fragment>
    <div className="name">Ім'я: {playerName}</div>
    <div className="result">Результат: {points}</div>
    <div className="time">Час: {time}</div>
    <div className="saved-on">Збережено: {moment(finished).format('MMMM Do YYYY, h:mm')}</div>
  </Fragment>
);

const GamesList = ({ data, load }) => (
  <div className="game-list">
    <ul>
      {data.map(({ id, ...rest }) => (
        <li key={id}>
          {load ? (
            <Link to={`/game/${id}`} className="wrapper">
              <ItemContent data={rest} />
            </Link>
          ) : (
            <div className="wrapper">
              <ItemContent data={rest} />
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default GamesList;
