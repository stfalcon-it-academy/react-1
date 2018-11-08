import React from 'react';
import { FormattedMessage } from 'react-intl';

import Menu, { Link, Button } from './Menu';

const PauseMenu = ({ onResume, onSave }) => (
  <Menu>
    <Button onClick={onResume}>
      <FormattedMessage id="continue" />
    </Button>
    <Button onClick={onSave}>
      <FormattedMessage id="save-and-exit" />
    </Button>
    <Link to="/">
      <FormattedMessage id="main-menu" />
    </Link>
  </Menu>
);

export default PauseMenu;
