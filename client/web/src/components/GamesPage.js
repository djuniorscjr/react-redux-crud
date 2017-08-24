import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GamesList from './GamesList';
import { fetchGames, deleteGame } from '../actions'

class GamesPage extends React.Component {
	componentDidMount() {
		this.props.fetchGames();
	}

	render(){
		return (
			<div>
				<h2>Games List</h2>
				<GamesList games={this.props.games} deleteGame={this.props.deleteGame} />
			</div>
		);
	}
}

GamesPage.propTypes = {
	games: PropTypes.array.isRequired,
	fetchGames: PropTypes.func.isRequired,
	deleteGame: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	games: state.games,
})

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage);
