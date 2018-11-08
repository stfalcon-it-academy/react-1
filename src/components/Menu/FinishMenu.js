import React from 'react';
import { FormattedMessage } from 'react-intl';

import Menu, { Link } from './Menu';

export default () => (
  <Menu>
    <FormattedMessage id="you-lose" />!
    <Link to="/">
      <FormattedMessage id="main-menu" />
    </Link>
  </Menu>
);
