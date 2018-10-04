import React from 'react';
import './PlayerNameForm.css';

export default ({ value, onChange, onStartGame }) => (
  <form
    className="player-name-form"
    onSubmit={e => {
      e.preventDefault();
      onStartGame();
    }}
  >
    <label htmlFor="player-name">Введіть ім'я:</label>
    <input type="text" id="player-name" value={value} onChange={onChange} required />
    <button>Грати</button>
  </form>
);
