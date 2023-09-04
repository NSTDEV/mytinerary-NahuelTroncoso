import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllItineraries, getItinerariesByCity, getItinerary, createItinerary, updateItinerary, deleteItinerary } from '../../services/itinerariesQueries';

export const loadItineraries = createAsyncThunk('load_itineraries', async () => {
    try {
        return await getAllItineraries();
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const loadItinerariesByCity = createAsyncThunk('load_itineraries_for_city', async (cityId) => {
    try {
        const itineraries = await getItinerariesByCity(cityId);
        return itineraries;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const loadItineraryDetails = createAsyncThunk('load_itinerary_details', async (itineraryId) => {
    try {
        return await getItinerary(itineraryId);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const createNewItinerary = createAsyncThunk('create_new_itinerary', async (itineraryData) => {
    try {
        return await createItinerary(itineraryData);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const updateExistingItinerary = createAsyncThunk('update_existing_itinerary', async ({ id, updatedData }) => {
    try {
        return await updateItinerary(id, updatedData);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const deleteItineraryById = createAsyncThunk('delete_itinerary_by_id', async (itineraryId) => {
    try {
        return await deleteItinerary(itineraryId);
    } catch (error) {
        console.log(error);
        throw error;
    }
});