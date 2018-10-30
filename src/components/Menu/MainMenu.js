import React from 'react';

import Menu, { Link } from './Menu';

export default () => (
  <Menu>
    <Link to="/game">Нова гра</Link>
    <Link to="/load">Завантажити гру</Link>
    <Link to="/leader-board">Лідери</Link>
  </Menu>
);
