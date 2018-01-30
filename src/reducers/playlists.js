/**
 * Created by skynetsaa on 30.01.18.
 */
const initialState = [
	'My home playlist',
	'My work playlist'
];

export default function playlists(state = initialState, action) {
	if (action.type === 'ADD_PLAYLIST') {
		return state;
	} else if (action.type === 'DELETE_PLAYLIST') {
		return state;
	}
	return state;
}