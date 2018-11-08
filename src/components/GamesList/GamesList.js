import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, FormattedDate, FormattedTime, FormattedRelative, FormattedPlural } from 'react-intl';

import './GameList.css';

const ItemContent = ({ data: { playerName, points, time, finished } }) => (
  <Fragment>
    <div className="name">
      <FormattedMessage id="player" />: {playerName}
    </div>
    <div className="result">
      <FormattedMessage id="result" />: {points}
    </div>
    <div className="time">
      <FormattedMessage id="time" />: {time}{' '}
      <FormattedPlural
        value={time}
        one={<FormattedMessage id="second" />}
        few={<FormattedMessage id="few-seconds" />}
        other={<FormattedMessage id="many-seconds" />}
      />
    </div>
    <div className="saved-on">
      <FormattedMessage id="saved" />:{' '}
      <span style={{ whiteSpace: 'nowrap' }}>
        <FormattedDate value={new Date(finished)} weekday="long" month="long" day="2-digit" year="numeric" />{' '}
        <FormattedTime value={new Date(finished)} />
        <br />
        <FormattedRelative value={new Date(finished)} />
      </span>
    </div>
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
