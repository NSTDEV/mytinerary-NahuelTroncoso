import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getAllCities, getCity, addCity, addCities, updateCity, updateAllCities, deleteCity, deleteAllCities } from '../../services/citiesQueries';

export const loadCities = createAsyncThunk('load_cities', async () => {
    try {
        const cities = await getAllCities();
        return cities;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const loadCityDetails = createAsyncThunk('load_city_details', async (cityId) => {
    try {
        return await getCity(cityId);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const addNewCity = createAsyncThunk('add_new_city', async (cityData) => {
    try {
        return await addCity(cityData);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const addMultipleCities = createAsyncThunk('add_multiple_cities', async (citiesData) => {
    try {
        return await addCities(citiesData);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const updateCityById = createAsyncThunk('update_city_by_id', async ({ id, updatedData }) => {
    try {
        return await updateCity(id, updatedData);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const updateAllCitiesData = createAsyncThunk('update_all_cities_data', async (updatedData) => {
    try {
        return await updateAllCities(updatedData);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const deleteCityById = createAsyncThunk('delete_city_by_id', async (cityId) => {
    try {
        return await deleteCity(cityId);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const deleteAllCitiesData = createAsyncThunk('delete_all_cities_data', async () => {
    try {
        return await deleteAllCities();
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const filterCities = createAction('filter_cities', (filteredCities, noResults) => ({
    payload: {
        filteredCities,
        noResults,
    },
}));

export const setSearchTerm = (searchTerm) => ({
    type: 'SET_SEARCH_TERM',
    payload: searchTerm,
});

export const increaseVisibleCities = createAction('increase_visible_cities');