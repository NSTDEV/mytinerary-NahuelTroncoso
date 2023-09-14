import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, login, logout, authenticated } from "../../services/usersQueries";

export const registerUser = createAsyncThunk("user_register", async (userData) => {
    try {
        const response = await register(userData);
        return response;
    } catch (error) {
        throw error;
    }
});

export const loginUser = createAsyncThunk("user_login", async (userData) => {
    try {
        const response = await login(userData);
        return response;
    } catch (error) {
        throw error;
    }
});

export const logoutUser = createAsyncThunk("user_logout", async () => {
    try {
        const response = await logout();
        return response;
    } catch (error) {
        throw error;
    }
});

export const authenticateUser = createAsyncThunk("authenticate_user", async () => {
    try {
        const response = await authenticated();
        return response;
    } catch (error) {
        throw error;
    }
});

export default { registerUser, loginUser, authenticateUser, logoutUser };