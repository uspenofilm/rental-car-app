import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await authInstance.get(
        `/cars?page=${_?.page ?? 1}&limit=12`
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
