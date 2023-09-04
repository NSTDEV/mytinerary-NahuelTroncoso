import axios from 'axios';

const citiesURL = axios.create({
    baseURL: 'http://localhost:4000'
});

export const getAllCities = async () => {
    try {
        const response = await citiesURL.get("/api/cities");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCity = async (id) => {
    try {
        const response = await citiesURL.get(`/api/cities/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return {}
    }
};

export const addCity = async (cityData) => {
    try {
        const response = await citiesURL.post("/api/cities", cityData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const addCities = async (citiesData) => {
    try {
        const response = await citiesURL.post("/api/cities/batch", citiesData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateCity = async (id, updatedData) => {
    try {
        const response = await citiesURL.put(`/api/city/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateAllCities = async (updatedData) => {
    try {
        const response = await citiesURL.put("/api/cities", updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCity = async (id) => {
    try {
        const response = await citiesURL.delete(`/api/city/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteAllCities = async () => {
    try {
        const response = await citiesURL.delete("/api/cities");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};