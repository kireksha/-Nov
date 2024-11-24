const initialState = {
	coders: [],
	coder: [],
	socials: [],
	skills: [],
	clickMoreAboutMe: false,
	searchCoderInput: ''
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
			}
			case 'SET_SEARCH_CODER_INPUT':
			return {
				...state,
				searchCoderInput: action.payload
			}
			case 'SET_CODERS':
			return {
				...state,
				coders: action.payload
			}
		default:
			return state;
	}
};
