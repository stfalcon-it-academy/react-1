import React from 'react';
import moment from 'moment';

import './AppHeader.css';

const addLeadingZero = (n = '') => {
  const str = `${n}`;
  switch (str.length) {
    case 0:
      return '00';
    case 1:
      return `0${n}`;
    default:
      return `${n}`;
  }
};

const AppHeader = ({ playerName, points, time }) => {
  const duration = moment.duration(time, 'seconds');

  return (
    <header className="app-header">
      <table>
        <tbody>
          <tr>
            <td>Гравець:</td>
            <td>{playerName || '---'}</td>
          </tr>
          <tr>
            <td>Результат:</td>
            <td>{points}</td>
          </tr>
          <tr>
            <td>Час:</td>
            <td>
              {Math.floor(duration.asHours())}:{addLeadingZero(duration.minutes())}:{addLeadingZero(duration.seconds())}
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  );
};

export default AppHeader;
