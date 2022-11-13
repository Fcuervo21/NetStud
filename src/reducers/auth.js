import { AUTH, LOGOUT } from "../reduxConstants/authConstants";

const authReducer = (state = [], action) => {
    switch (action.type) {
        case AUTH :
  
          return { ...state, authData: action.payload };
      case LOGOUT:
        localStorage.clear();
  
        return { ...state, authData: null, loading: false, errors: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
