import axios from 'axios';

const itinerariesURL = axios.create({
    baseURL: 'http://localhost:4000',
});

export const getAllItineraries = async () => {
    try {
        const response = await itinerariesURL.get("/api/itineraries");
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getItinerariesByCity = async (cityId) => {
    try {
        const response = await itinerariesURL.get(`/api/itineraries/city/${cityId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getItinerary = async (id) => {
    try {
        const response = await itinerariesURL.get(`/api/itineraries/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const createItinerary = async (itineraryData) => {
    try {
        const response = await itinerariesURL.post("/api/itineraries", itineraryData);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const updateItinerary = async (id, updatedData) => {
    try {
        const response = await itinerariesURL.put(`/api/itineraries/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const deleteItinerary = async (id) => {
    try {
        const response = await itinerariesURL.delete(`/api/itineraries/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};