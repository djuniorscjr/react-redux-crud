export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME = 'ADD_GAME';
export const GAME_FETCHED = 'GAME_FETCHED';
export const GAME_UPDATED = 'GAME_UPDATED';
export const GAME_DELETED = 'GAME_DELETED';

const setGames = (games) => ({
	type: SET_GAMES,
	games,	
});

export const fetchGames = () => {
	return dispatch => {
		fetch('/api/games')
			.then(res => res.json())
			.then(data => dispatch(setGames(data.games)));
	}
}

const gameFetched = (game) => ({
	type: GAME_FETCHED,
	game
});

export const fetchGame = (id) => {
	return dispatch => {
		fetch(`/api/games/${id}`)
			.then(res => res.json())
			.then(data => dispatch(gameFetched(data.game)));
	}
}

const handleResponse = (response) => {
	if (response.ok) {
		return response.json();
	} else {
		let error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
}

const addGame = (game) => ({
	type: ADD_GAME,
	game,
})


export const saveGame = (data) => {
	return dispatch => {
		return fetch('/api/games', {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			}
		}).then(handleResponse)
			.then(data => dispatch(addGame(data.game)));
	}
};

const gameUpdated = (game) => ({
	type: GAME_UPDATED,
	game,
})

export const updateGame = (data) => {
	return dispatch => {
		return fetch(`/api/games/${data._id}`, {
			method: 'put',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			}
		}).then(handleResponse)
			.then(data => dispatch(gameUpdated(data.game)));
	}
};

const gameDeleted = (id) => ({
	type: GAME_DELETED,
	id,
})

export const deleteGame = (id) => {
	return dispatch => {
		return fetch(`/api/games/${id}`, {
			method: 'delete',
			headers: {
				"Content-Type": "application/json",
			}
		}).then(handleResponse)
			.then(data => dispatch(gameDeleted(id)));
	}
};