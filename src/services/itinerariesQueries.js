import axiosInstance from './axiosConfig';

export const getAllItineraries = async () => {
    try {
        const response = await axiosInstance.get("/itineraries");
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getItinerariesByCity = async (cityId) => {
    try {
        const response = await axiosInstance.get(`/itineraries/city/${cityId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getItinerary = async (id) => {
    try {
        const response = await axiosInstance.get(`/itineraries/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const createItinerary = async (itineraryData) => {
    try {
        const response = await axiosInstance.post("/itineraries", itineraryData);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const updateItinerary = async (id, updatedData) => {
    try {
        const response = await axiosInstance.put(`/itineraries/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const deleteItinerary = async (id) => {
    try {
        const response = await axiosInstance.delete(`/itineraries/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};