import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";
// import {createSelector} from "@reduxjs/toolkit";
// import { selectBrandFilter } from "../filters/selectors";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: { cars: [], page: 1, totalCars: 0, totalPages: 1 },
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;

export const selectCars = (state) => state.cars.items;

// export const selectFilteredCars = createSelector(
//   [selectCars, selectBrandFilter],
//   (cars, filter) =>
//     cars.filter((car) => car.brand.toLowerCase().includes(filter.toLowerCase()))
// );
