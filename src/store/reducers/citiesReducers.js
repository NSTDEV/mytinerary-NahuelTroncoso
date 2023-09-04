import { createReducer } from "@reduxjs/toolkit";
import { loadCities, loadCityDetails, addNewCity, addMultipleCities, updateCityById, updateAllCitiesData, deleteCityById, deleteAllCitiesData, increaseVisibleCities, filterCities } from '../actions/citiesActions';

const initialState = {
    cities: [],
    cityDetails: {},
    filteredCities: [],
    visibleCities: 8,
    noResults: false
};

const citiesReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(loadCities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload
            };
        })
        .addCase(loadCityDetails.fulfilled, (state, action) => {
            return {
                ...state,
                cityDetails: action.payload
            };
        })
        .addCase(addNewCity.fulfilled, (state, action) => {
            return {
                ...state,
                cities: [...state.cities, action.payload]
            };
        })
        .addCase(addMultipleCities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: [...state.cities, ...action.payload]
            };
        })
        .addCase(updateCityById.fulfilled, (state, action) => {
            const updatedCityIndex = state.cities.findIndex(
                (city) => city._id === action.payload._id
            );
            if (updatedCityIndex !== -1) {
                state.cities[updatedCityIndex] = action.payload;
            }
        })
        .addCase(updateAllCitiesData.fulfilled, (state, action) => {
            state.cities = state.cities.map((city) => ({
                ...city,
                ...action.payload
            }));
        })
        .addCase(deleteCityById.fulfilled, (state, action) => {
            return {
                ...state,
                cities: state.cities.filter(
                    (city) => city._id !== action.payload._id
                )
            };
        })
        .addCase(deleteAllCitiesData.fulfilled, (state) => {
            state.cities = [];
        })
        .addCase(increaseVisibleCities, (state) => {
            return {
                ...state,
                visibleCities: state.visibleCities + 8
            };
        })
        .addCase(filterCities, (state, action) => {
            return {
                ...state,
                filteredCities: action.payload.filteredCities,
                noResults: action.payload.noResults
            };
        })
);

export default citiesReducer;