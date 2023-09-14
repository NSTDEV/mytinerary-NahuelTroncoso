import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

const setAuthHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};

setAuthHeader();

export const register = async (userData) => {
    try {
        const response = await axiosInstance.post("/user/register", userData);
        localStorage.setItem("token", response.data.token);

        setAuthHeader();
        return response.data;
    } catch (error) {
        throw new Error("Error trying to register user: " + error.message);
    }
};

export const login = async (userData) => {
    try {
        const response = await axiosInstance.post("/user/login", userData);
        localStorage.setItem("token", response.data.token);

        setAuthHeader();
        return response.data;
    } catch (error) {
        throw new Error("Error logging in as user: " + error.message);
    }
};

export const logout = async () => {
    try {
        const response = await axiosInstance.post("/user/logout");
        localStorage.removeItem("token");

        setAuthHeader();
        return response.data;
    } catch (error) {
        throw new Error("Error signing out as user: " + error.message);
    }
};

export const authenticated = async () => {
    try {
        const response = await axiosInstance.post("/user/authenticated");
        localStorage.setItem("token", response.data.token);

        setAuthHeader();
        return response.data;
    } catch (error) {
        throw new Error("Error when trying to verify user: " + error.message);
    }
};