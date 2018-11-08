import React from 'react';
import { FormattedMessage } from 'react-intl';

import './PlayerNameForm.css';

export default ({ value, onChange, onStartGame }) => (
  <form
    className="player-name-form"
    onSubmit={e => {
      e.preventDefault();
      onStartGame();
    }}
  >
    <label htmlFor="player-name">
      <FormattedMessage id="enter-your-name" />:
    </label>
    <input type="text" id="player-name" value={value} onChange={onChange} required />
    <button>
      <FormattedMessage id="play" />
    </button>
  </form>
);
