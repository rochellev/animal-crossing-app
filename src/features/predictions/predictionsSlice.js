import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
import { useAsyncStorage } from "@react-native-community/async-storage";
const { getItem, setItem } = useAsyncStorage("@data");

// need to know turnips array for input to predictions

const initialState = {
  data: {
    firstTimeBuyer: false,
    previousPattern: "LARGE_SPIKE",
    output: {
      monday: {
        guaranteedMin: 20,
        potentialMax: 899
      },
      tuesday: {
        guaranteedMin: 20,
        potentialMax: 899
      },
      wednesday: {
        guaranteedMin: 20,
        potentialMax: 899
      },
      thursday: {
        guaranteedMin: 20,
        potentialMax: 899
      },
      friday: {
        guaranteedMin: 20,
        potentialMax: 899
      },
      saturday: {
        monday: {
          guaranteedMin: 20,
          potentialMax: 899
        }
      }
    }
  },
  status: "idle",
  error: null
};

const predictionsSlice = createSlice({
  name: "predictions",
  initialState,
  reducers: {
    firstTimeBuyerUpdated(state, action) {
      const { buyerStatus } = action.payload;
      state.data.firstTimeBuyer = buyerStatus;
    },
    previousPatternUpdated(state, action) {
      const { patternInput } = action.payload;
      state.data.previousPattern = patternInput;
    }
  }
});

export default predictionsSlice.reducer;

export const {
  firstTimeBuyerUpdated,
  previousPatternUpdated
} = predictionsSlice.actions;

export const getData = state => Object.values(state.predictions.data);

// sell prices array [Sun, MondayAM, MondayPM, TuesdayAM, ...]

// export const calculatePrediction = () = {

// }
