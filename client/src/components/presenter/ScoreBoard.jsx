import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import ScoreBoardEntry from './ScoreBoardEntry';

const propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  final: PropTypes.bool,
  restartGame: PropTypes.func,
};

const defaultProps = {
  final: false,
  restartGame: () => {},
};

const ScoreBoard = ({ players, final, restartGame }) => (
  <div className="score-board">
    <h3 className="score-board-title">
      {final ? 'Final' : ''} Results
    </h3>
    <table>
      {_.sortBy(players, 'score')
        .reverse()
        .map(player => (<ScoreBoardEntry key={player.username} player={player} />))}
    </table>
    {final ? <button onClick={restartGame} >Start New Game</button> : ''}
  </div>
);

ScoreBoard.propTypes = propTypes;
ScoreBoard.defaultProps = defaultProps;

export default ScoreBoard;
