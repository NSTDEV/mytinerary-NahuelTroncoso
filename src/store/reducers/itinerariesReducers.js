import { createReducer } from "@reduxjs/toolkit";
import { loadItinerariesByCity } from '../actions/itinerariesActions';

const initialState = {
    itineraries: [],
    loading: false,
    error: null,
};

const itinerariesReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(loadItinerariesByCity.fulfilled, (state, action) => {
            return {
                ...state,
                itineraries: action.payload,
            };
        })
);

export default itinerariesReducer;