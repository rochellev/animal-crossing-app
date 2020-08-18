import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  turnips: {
    sunday: 90,
    monday: {
      day: "Monday",
      morning: 40,
      afternoon: 400
    },
    tuesday: {
      day: "Tuesday",
      morning: 50,
      afternoon: 500
    },
    wednesday: {
      day: "Wednesday",
      morning: 60,
      afternoon: 650
    },
    thursday: {
      day: "Thursday",
      morning: 80,
      afternoon: 80
    },
    friday: {
      day: "Friday",
      morning: 90,
      afternoon: 200
    },
    saturday: {
      day: "Saturday",
      morning: 100,
      afternoon: 800
    }
  },
  status: "idle",
  error: null
};
const turnipsSlice = createSlice({
  name: "turnips",
  initialState,
  reducers: {
    sundayPriceUpdated(state, action) {
      const { price } = action.payload;
      state.sunday = price;
    },
    morningPriceUpdated(state, action) {
      const { day, value } = action.payload;
      state[day].morning = value;
    }
  }
});

export const { sundayPriceUpdated, morningPriceUpdated } = turnipsSlice.actions;
export default turnipsSlice.reducer;
