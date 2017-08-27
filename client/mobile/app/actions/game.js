export const LIST_GAME = 'LIST_GAME';
export const LOADING = 'LOADING';
export const ADD_GAME = 'ADD_GAME';
export const EDIT_GAME = 'EDIT_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';
export const SET_ITEM = 'SET_ITEM';
export const SET_IMAGE = 'SET_IMAGE';
export const SET_TITLE = 'SET_TITLE';
export const NEW_GAME = 'NEW_GAME';

//localhost = genymotion 10.0.3.2 adv 10.0.2.2
const URL = 'http://10.0.2.2:8080';

export const list = () => {
	return dispatch => {
		dispatch({ type: LOADING });
		fetch(`${URL}/api/games`)
			.then(res => res.json())
			.then(data => dispatch(setGames(data.games)));
	}
};

const setGames = (games) => ({
	type: LIST_GAME,
	data: games,	
});

export const setItem = (_id) => ({
	type: SET_ITEM,
	_id,
});

export const remove = (_id) => ({
	type: REMOVE_GAME,
	_id,
});

export const edit = (_id) => ({
	type: EDIT_GAME,
	_id,
});

export const save = (game) => {
	return {
		type: ADD_GAME,
		game,
	}
};

export const sendImage = (imgbase64) => ({
	type: SET_IMAGE,
	image: imgbase64,
});

export const setTitle = (title) => ({
	type: SET_TITLE,
	title,
});

export const newGame = () => ({
	type: NEW_GAME,
});
