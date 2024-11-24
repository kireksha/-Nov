const initialState = {
	coder: [],
	socials: [],
	skills: {},
	clickMoreAboutMe: false,
};
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CODER':
			return {
				...state,
				coder: action.payload,
			};
		case 'SET_CLICK_MORE_ABOUT_ME':
			return { ...state, clickMoreAboutMe: action.payload };
		case 'SET_SOCIALS':
			return {
				...state,
				socials: action.payload,
			};
		case 'SET_SKILLS':
			return {
				...state,
				skills: action.payload,
			};
		default:
			return state;
	}
};
