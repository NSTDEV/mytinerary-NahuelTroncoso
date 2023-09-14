import { createReducer } from "@reduxjs/toolkit";
import { authenticateUser, logoutUser, registerUser, loginUser } from "../actions/usersActions";

const initialState = {
    user: null,
    token: null,
    error: null,
    isLoggedIn: false
};

const usersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase("SET_TOKEN", (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = true;
        })
        .addCase(authenticateUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            return { ...initialState };
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                error: null,
                isLoggedIn: true,
            }
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isLoggedIn: true,
            };
        })
        .addMatcher(
            (action) => action.type.endsWith("/rejected"),
            (state, action) => {
                state.error = action.error.message;
            }
        );
});

export default usersReducer;