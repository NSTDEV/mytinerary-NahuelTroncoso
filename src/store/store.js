import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import itinerariesReducer from "./reducers/itinerariesReducers";
import usersReducer from "./reducers/usersReducers";

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    users: usersReducer
  }
});

export default store;