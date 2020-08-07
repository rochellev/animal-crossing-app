import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sunday: 90,
  monday: {
    day: "Monday",
    morning: 92,
    afternoon: 90
  },
  tuesday: {
    day: "Tuesday",
    morning: 50,
    afternoon: 55
  },
  wednesday: {
    day: "Wednesday",
    morning: 60,
    afternoon: 65
  },
  thursday: {
    day: "Thursday",
    morning: 80,
    afternoon: 85
  },
  friday: {
    day: "Friday",
    morning: 90,
    afternoon: 95
  },
  saturday: {
    day: "Saturday",
    morning: 100,
    afternoon: 105
  }
};
const turnipsSlice = createSlice({
  name: "turnips",
  initialState,
  reducers: {
    selectDay: (sate, action) => {}
  }
});

export default turnipsSlice.reducer;
