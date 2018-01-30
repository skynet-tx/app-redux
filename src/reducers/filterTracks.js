/**
 * Created by skynetsaa on 30.01.18.
 */
const initialState = '';

export default function filterTracks(state = initialState, action) {
	if (action.type === 'FIND_TRACK') {
		return action.payload;
	}
	return state;
}