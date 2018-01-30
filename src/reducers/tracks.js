/**
 * Created by skynetsaa on 30.01.18.
 */
const initialState = [
	'Smells like spirit',
	'Mutter'
];

export default function playlists(state = initialState, action) {
	if (action.type === 'ADD_TRACK') {
		return [
			...state,
			action.payload
		]
	} else if (action.type === 'DELETE_TRACK') {
		return state;
	}
	return state;
}