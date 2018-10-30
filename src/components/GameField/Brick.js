import React from 'react';
import PropTypes from 'prop-types';

const Brick = ({ full }) => <div className={`brick ${full ? 'full' : ''}`} />;

Brick.propTypes = {
  full: PropTypes.bool.isRequired,
};

export default Brick;
