import { createReducer } from "@reduxjs/toolkit";
import usersActions from "../actions/users";

const initialState = {
    users: [
        {
            name: "",
            lastName: "",
            age: 0
        }
    ]
}

const usersReducer = createReducer(initialState, (builder) => {
    return builder.addCase(usersActions.add_users, (state, action) => {
        const newState = {...state, users: action.payload}
    });
})