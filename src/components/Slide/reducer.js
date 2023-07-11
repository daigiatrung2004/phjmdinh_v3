function reducer(state, action) {
	switch (action.type) {
		case 'left':
			return (state = state - action.payload);
		case 'right':
			return (state = state + action.payload);
		default:
			return state;
	}
}

export default reducer;
