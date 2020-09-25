import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
import { useAsyncStorage } from "@react-native-community/async-storage";
const { getItem, setItem } = useAsyncStorage("@data");
// state = {turnips, status, error}
const initialState = {
  data: {
    firstTimeBuyer: true,
    previousPattern: "large_spike",
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
    firstTimeBuyerUpdated(state, action) {
      const { isFirstTimeBuyer } = action.payload;
      state.data.firstTimeBuyer = isFirstTimeBuyer;
    },
    previousPatternUpdated(state, action) {
      const { patternInput } = action.payload;
      state.data.previousPattern = patternInput;
    },
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
  firstTimeBuyerUpdated,
  previousPatternUpdated,
  sundayPriceUpdated,
  morningPriceUpdated,
  afternoonPriceUpdated
} = turnipsSlice.actions;
export default turnipsSlice.reducer;

export const getDayData = (state, day) =>
  Object.values(state.turnips.data[day]);

export const getBuyerStatus = state =>
state.turnips.data.firstTimeBuyer;

export const getSundayData = state => state.turnips.data.sunday;

export const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    // read key error
  }

  console.log(keys);
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
};
