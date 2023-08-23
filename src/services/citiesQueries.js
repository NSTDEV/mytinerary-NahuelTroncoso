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
        return []
    }
};

export const getCity = async (id) => {
    try {
        const response = await citiesURL.get("/api/cities/" + id);
        return response.data.city;
    } catch (error) {
        console.log(error);
        return {}
    }
};
