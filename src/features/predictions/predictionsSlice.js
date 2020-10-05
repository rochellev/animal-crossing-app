import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
import { useAsyncStorage } from "@react-native-community/async-storage";
import Predictor from "./Predictor";
const { getItem, setItem } = useAsyncStorage("@data");

// need to know turnips array for input to predictions

const initialState = {
  data: {
    outputs: [
      {
        pattern_number: 4,
        prices: [
          {
            min: 80,
            max: 80
          },
          {
            min: 80,
            max: 80
          },
          {
            min: 75,
            max: 75
          },
          {
            min: 65,
            max: 65
          },
          {
            min: 89,
            max: 89
          },
          {
            min: 112,
            max: 112
          },
          {
            min: 111,
            max: 480
          },
          {
            min: 111,
            max: 160
          },
          {
            min: 72,
            max: 159
          },
          {
            min: 32,
            max: 72
          },
          {
            min: 28,
            max: 72
          },
          {
            min: 24,
            max: 72
          },
          {
            min: 20,
            max: 72
          },
          {
            min: 16,
            max: 72
          }
        ],
        weekGuaranteedMinimum: 111,
        weekMax: 480
      }
    ]
  },
  status: "idle",
  error: null
};

const predictionsSlice = createSlice({
  name: "predictions",
  initialState,
  reducers: {}
});

export default predictionsSlice.reducer;

// export const {

// } = predictionsSlice.actions;

export const getData = state => Object.values(state.predictions.data);

// sell prices array [Sun, MondayAM, MondayPM, TuesdayAM, ...]

export const calculatePrediction = (
  state,
  sellPrices,
  firstBuy,
  previousPattern
) => {
  let predictor = new Predictor(sellPrices, firstBuy, previousPattern);
  let analyzedPossibilities = predictor.analyze_possibilities();
  return analyzedPossibilities;
};
