import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
import { useAsyncStorage } from "@react-native-community/async-storage";
import { exp } from "react-native-reanimated";
const { getItem, setItem } = useAsyncStorage("@data");
// state = {turnips, status, error}

const initialState = {
  data: {
    firstTimeBuyer: false,
    previousPattern: "large-spike",
    currentIndex: 0,
    sunday: 95,
    monday: {
      day: "Monday",
      morning: 98,
      afternoon: 100
    },
    tuesday: {
      day: "Tuesday",
      morning: null,
      afternoon: null
    },
    wednesday: {
      day: "Wednesday",
      morning: null,
      afternoon: null
    },
    thursday: {
      day: "Thursday",
      morning: null,
      afternoon: null
    },
    friday: {
      day: "Friday",
      morning: null,
      afternoon: null
    },
    saturday: {
      day: "Saturday",
      morning: null,
      afternoon: null
    }
  },
  status: "idle",
  error: null
};

// const initialState = {
//   data: {
//     firstTimeBuyer: false,
//     previousPattern: "fluctuating",
//     sunday: 90,
//     monday: {
//       day: "Monday",
//       morning: 37,
//       afternoon: 100
//     },
//     tuesday: {
//       day: "Tuesday",
//       morning: 120,
//       afternoon: 145
//     },
//     wednesday: {
//       day: "Wednesday",
//       morning: 172,
//       afternoon: 130
//     },
//     thursday: {
//       day: "Thursday",
//       morning: 36,
//       afternoon: 34
//     },
//     friday: {
//       day: "Friday",
//       morning: null,
//       afternoon: null
//     },
//     saturday: {
//       day: "Saturday",
//       morning: null,
//       afternoon: null
//     }
//   },
//   status: "idle",
//   error: null
// };
const turnipsSlice = createSlice({
  name: "turnips",
  initialState,
  reducers: {
    firstTimeBuyerUpdated(state, action) {
      const { value } = action.payload;
      state.data.firstTimeBuyer = value;
    },
    previousPatternUpdated(state, action) {
      const { value } = action.payload;
      state.data.previousPattern = value;
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

export const getBuyerStatus = state => state.turnips.data.firstTimeBuyer;

export const getPreviousPattern = state => state.turnips.data.previousPattern;
export const getSundayData = state => state.turnips.data.sunday;

// returns object with input array [sunday, mondayAM, MondayPM...] and first time buyer T/F and previous pattern
export const getInputs = state => {
  const sellingDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  var inputArray = [];
  inputArray.push(state.turnips.data.sunday);
  inputArray.push(state.turnips.data.sunday);
  for (const day of sellingDays) {
    inputArray.push(state.turnips.data[day].morning);
    inputArray.push(state.turnips.data[day].afternoon);
  }
let previous_pattern = state.turnips.data.previousPattern
let pattern = null;
if (previous_pattern == "0" || previous_pattern == "fluctuating") {
  pattern = 0;
} else if (previous_pattern == "1" || previous_pattern == "large-spike") {
  pattern = 1;
} else if (previous_pattern == "2" || previous_pattern == "decreasing") {
  pattern = 2;
} else if (previous_pattern == "3" || previous_pattern == "small-spike") {
  pattern = 3;
} else {
  pattern = -1;
}
  
  const inputObject = {
    sellPrices: inputArray,
    previousPattern: pattern,
    firstBuy: state.turnips.data.firstTimeBuyer
  };
  return inputObject;
};

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
