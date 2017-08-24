export const LIST_GAME = 'LIST_GAME';
export const LOADING = 'LOADING';
export const ADD_GAME = 'ADD_GAME';
export const EDIT_GAME = 'EDIT_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';
export const SET_ITEM = 'SET_ITEM';

const data = {
	"_id": "5996ebe0bcac71255cefcb88",
	"title": "Yeah!123",
	"cover": "https://cdn.pixabay.com/photo/2015/11/15/21/31/lego-1044891_960_720.jpg"
};
const data2 = {
	"_id": "599e0bcac71255cefcb88",
	"title": "Yeah!1s23",
	"cover": "https://cdn.pixabay.com/photo/2015/11/15/21/31/lego-1044891_960_720.jpg"
};
const example = [];
example.push(data);
example.push(data2);

export const list = () => {
	return dispatch => {
		dispatch({ type: LOADING });
		setTimeout(() => {
			dispatch({ type: LIST_GAME, data: example});
		}, 5000);
	};
};

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



