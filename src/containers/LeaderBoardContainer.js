import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GamesList from '../components/GamesList/GamesList';
import { fetchLeaderBoard } from '../redux/actions/leaderBoardActions';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

class LeaderBoardContainer extends Component {
  componentWillMount() {
    this.props.fetchLeaderBoard();
  }

  render() {
    const { leaders, error, requestInProgress } = this.props;
    return (
      <div>
        {requestInProgress && <LoadingSpinner />}
        {error}
        <GamesList data={leaders} />
      </div>
    );
  }
}

const mapStateToProps = ({ leaderBoardState }) => ({ ...leaderBoardState });
const mapDispatchToProps = dispatcher => bindActionCreators({ fetchLeaderBoard }, dispatcher);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeaderBoardContainer);
