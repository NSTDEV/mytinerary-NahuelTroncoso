import axiosInstance from './axiosConfig';

export const getAllCities = async () => {
    try {
        const response = await axiosInstance.get("/cities");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCity = async (id) => {
    try {
        const response = await axiosInstance.get(`/cities/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return {}
    }
};

export const addCity = async (cityData) => {
    try {
        const response = await axiosInstance.post("/cities", cityData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const addCities = async (citiesData) => {
    try {
        const response = await axiosInstance.post("/cities/batch", citiesData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateCity = async (id, updatedData) => {
    try {
        const response = await axiosInstance.put(`/city/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateAllCities = async (updatedData) => {
    try {
        const response = await axiosInstance.put("/cities", updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCity = async (id) => {
    try {
        const response = await axiosInstance.delete(`/city/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteAllCities = async () => {
    try {
        const response = await axiosInstance.delete("/cities");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};