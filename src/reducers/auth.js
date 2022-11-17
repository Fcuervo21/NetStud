import { AUTH, LOGOUT, LOGGED_INFO } from "../reduxConstants/authConstants";

const authReducer = (state = [], action) => {
    // switch (action.type) {
    //     case AUTH :

    //       return { ...state, authData: action.payload };
    //   case LOGOUT:
    //     localStorage.clear();

    //     return { ...state, authData: null, loading: false, errors: null };
    //   default:
    //     return state;
    // }
    switch (action.type) {
        case AUTH:
            localStorage.setItem(
                "profile",
                JSON.stringify({ ...action?.data })
            );

            return {
                ...state,
                authData: action.data,
                loading: false,
                errors: null,
            };
        case LOGOUT:
            localStorage.clear();

            return { ...state, authData: null, loading: false, errors: null };
        case LOGGED_INFO:
            return {...state, logged: [action.payload]};
        default:
            return state;
    }
};

export default authReducer;
