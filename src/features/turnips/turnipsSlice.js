import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// state = {turnips, status, error}
const initialState = {
  data: {
    sunday: 90,
    monday: {
      day: "Monday",
      morning: 30,
      afternoon: 40
    },
    tuesday: {
      day: "Tuesday",
      morning: 50,
      afternoon: 60
    },
    wednesday: {
      day: "Wednesday",
      morning: 60,
      afternoon: 65
    },
    thursday: {
      day: "Thursday",
      morning: 70,
      afternoon: 90
    },
    friday: {
      day: "Friday",
      morning: 99,
      afternoon: 200
    },
    saturday: {
      day: "Saturday",
      morning: 100,
      afternoon: 69
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
      const { value } = action.payload;
      state.data.sunday = value;
    },
    morningPriceUpdated(state, action) {
      const { day, value } = action.payload;
      state.data[day].morning = value;
    },
    afternoonPriceUpdated(state, action) {
      const { day, value } = action.payload;
      state.data[day].afternoon = value;
    }
  }
});

export const {
  sundayPriceUpdated,
  morningPriceUpdated,
  afternoonPriceUpdated
} = turnipsSlice.actions;
export default turnipsSlice.reducer;

export const getDayData = (state, day) =>
  Object.values(state.turnips.data[day]);

export const getSundayData = state => state.turnips.data.sunday;
