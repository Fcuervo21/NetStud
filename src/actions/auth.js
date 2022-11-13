import { AUTH } from "../reduxConstants/authConstants";

export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

      } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router.push("/");
    } catch (error) {
        console.log(error);
    }
};

export const userLogged = (logged) => async (dispatch) => {
    try {

        dispatch({ type: AUTH, logged });

    } catch (error) {
        console.log(error);
    }
}