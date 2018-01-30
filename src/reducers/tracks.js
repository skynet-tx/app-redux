/**
 * Created by skynetsaa on 30.01.18.
 */
const initialState = [];

export default function playlists(state = initialState, action) {
	if (action.type === 'ADD_TRACK') {
		return [
			...state,
			action.payload
		]
	} else if (action.type === 'FETCH_TRACKS_SUCCESS') {
		return action.payload;
	}
	return state;
}