import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { FormattedMessage, FormattedTime } from 'react-intl';

import './AppHeader.css';

const AppHeader = ({ playerName, points, time }) => {
  const duration = moment.duration(time, 'seconds');

  return (
    <header className="app-header">
      <table>
        <tbody>
          <tr>
            <td>
              <FormattedMessage id="player" />:
            </td>
            <td>{playerName || '---'}</td>
          </tr>
          <tr>
            <td>
              <FormattedMessage id="result" />:
            </td>
            <td>{points}</td>
          </tr>
          <tr>
            <td>
              <FormattedMessage id="time" />:
            </td>
            <td>
              <FormattedTime value={duration} hour="numeric" minute="numeric" second="numeric" timeZone="utc" />
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  );
};

const mapStateToProps = ({ gameState }) => ({ ...gameState });

export default connect(mapStateToProps)(AppHeader);
