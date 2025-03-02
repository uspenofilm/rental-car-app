import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "../redux/Cars/slice.js";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
