import React from 'react';

import Menu, { Link, Button } from './Menu';

const PauseMenu = ({ onResume, onSave }) => (
  <Menu>
    <Button onClick={onResume}>Продовжити</Button>
    <Button onClick={onSave}>Зберегти і вийти</Button>
    <Link to="/">Головне меню</Link>
  </Menu>
);

export default PauseMenu;
