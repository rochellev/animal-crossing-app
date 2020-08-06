import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sunday: 90,
  monday: {
    morning: 92,
    afternoon: 90
  },
  tuesday: {
    morning: 50,
    afternoon: 55
  },
  wednesday: {
    morning: 60,
    afternoon: 65
  },
  thursday: {
    morning: 80,
    afternoon: 85
  },
  friday: {
    morning: 90,
    afternoon: 95
  },
  saturday: {
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
