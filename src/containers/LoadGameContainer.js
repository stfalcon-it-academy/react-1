import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GamesList from '../components/GamesList/GamesList';
import { fetchGamesList } from '../redux/actions/loadGameActions';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

class LoadGameContainer extends Component {
  componentWillMount() {
    this.props.fetchGameData();
  }

  render() {
    const { games, error, requestInProgress } = this.props;
    return (
      <div>
        {requestInProgress && <LoadingSpinner />}
        {error}
        <GamesList data={games} load />
      </div>
    );
  }
}

const mapStateToProps = ({ loadGameState }) => ({ ...loadGameState });
const mapDispatchToProps = dispatcher => bindActionCreators({ fetchGameData: fetchGamesList }, dispatcher);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadGameContainer);
