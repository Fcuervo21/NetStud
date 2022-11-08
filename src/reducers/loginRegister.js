import { REGISTER, LOGIN } from "../constants/loginRegister";

export default (state = [], action) => {
	switch (action.type) {
		case REGISTER:
			return {...state, registration: [action.payload]};
		case LOGIN:
			return {...state, logUser: [action.payload]};
		default:
			return state;
	}
};
