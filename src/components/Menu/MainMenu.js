import React from 'react';

import Menu, { Link } from './Menu';

export default () => (
  <Menu>
    <Link href="#">Нова гра</Link>
    <Link href="#" disabled>
      Завантажити гру
    </Link>
    <Link href="#" disabled>
      Лідери
    </Link>
  </Menu>
);
