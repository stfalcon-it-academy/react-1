import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { addLeadingZero } from '../../helpers/stringHelpers';
import './AppHeader.css';

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

const mapStateToProps = ({ gameState }) => ({ ...gameState });

export default connect(mapStateToProps)(AppHeader);
