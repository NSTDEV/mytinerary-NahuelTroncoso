import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import itinerariesReducer from "./reducers/itinerariesReducers";

const store = configureStore({
  reducer: {
    citiesReducer: citiesReducer,
    itinerariesReducer: itinerariesReducer
  }
});

export default store;