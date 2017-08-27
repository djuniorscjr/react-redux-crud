import { 
	LIST_GAME, 
	LOADING,
	SET_ITEM,
	REMOVE_GAME,
	EDIT_GAME,
	ADD_GAME,
	SET_IMAGE,
	SET_TITLE,
	NEW_GAME,
} from '../actions/game';

const initialState = {
	list: [],
	loading: false,
	title: '',
	cover: '',
	_id: '',
};

export default (state = initialState, action) => {
	switch(action.type) {
		case LOADING: 
			return {
				...state,
				loading: true,
			}
		case LIST_GAME:
			return {
				...state,
				list: action.data,
				loading: false,
			};
		case SET_ITEM:
			return {
				...state,
				_id: action._id,
			}
		case REMOVE_GAME:
			return {
				...state,
				list: state.list.filter((elem) => {
					return elem._id !== action._id;
				}),
			}
		case EDIT_GAME:
			return {
				...state,
				game: state.list.filter((elem) => {
					return elem._id === action._id
				})[0],
			}
		case SET_IMAGE:
			return {
				...state,
				cover: action.image,
			}
		case ADD_GAME:
			return {
				...state,
			}
		case SET_TITLE:
			return {
				...state,
				title: action.title,
			}
		case NEW_GAME:
			return {
				...state,
				_id: '',
				title: '',
				cover: '',
			}
		default:
			return state;
	}
}
