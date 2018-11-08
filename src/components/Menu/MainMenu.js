import React from 'react';
import { FormattedMessage } from 'react-intl';

import Menu, { Link } from './Menu';

export default () => (
  <Menu>
    <Link to="/game">
      <FormattedMessage id="new-game" />
    </Link>
    <Link to="/load">
      <FormattedMessage id="load-game" />
    </Link>
    <Link to="/leader-board">
      <FormattedMessage id="leaders" />
    </Link>
  </Menu>
);
