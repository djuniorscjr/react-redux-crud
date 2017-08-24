import { 
	LIST_GAME, 
	LOADING,
	SET_ITEM,
	REMOVE_GAME,
	EDIT_GAME,
} from '../actions/game';

const initialState = {
	list: [],
	loading: false,
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
				list: state.list.filter((elem, i, array) => {
					return elem._id !== action._id;
				}),
			}
		case EDIT_GAME:
			return {
				...state,
				game: state.list.filter((elem, i, array) => {
					return elem._id === action._id
				}),
			}
		default:
			return state;
	}
}
