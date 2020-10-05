import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
import { useAsyncStorage } from "@react-native-community/async-storage";
import Predictor from "./Predictor";
const { getItem, setItem } = useAsyncStorage("@data");

// need to know turnips array for input to predictions
// predictions: [65, 80, 90, 100, 150]
const initialState = {
  data: {
    predictions: [
      {
        pattern_number: 4,
        prices: [
          {
            min: 65,
            max: 65
          },
          {
            min: 65,
            max: 65
          },
          {
            min: 26,
            max: 91
          },
          {
            min: 23,
            max: 91
          },
          {
            min: 20,
            max: 130
          },
          {
            min: 17,
            max: 390
          },
          {
            min: 13,
            max: 390
          },
          {
            min: 10,
            max: 390
          },
          {
            min: 7,
            max: 390
          },
          {
            min: 20,
            max: 390
          },
          {
            min: 17,
            max: 390
          },
          {
            min: 13,
            max: 390
          },
          {
            min: 10,
            max: 130
          },
          {
            min: 7,
            max: 129
          }
        ],
        weekGuaranteedMinimum: 56,
        weekMax: 390
      },
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
            min: 32,
            max: 112
          },
          {
            min: 28,
            max: 112
          },
          {
            min: 24,
            max: 160
          },
          {
            min: 20,
            max: 480
          },
          {
            min: 16,
            max: 480
          },
          {
            min: 12,
            max: 480
          },
          {
            min: 8,
            max: 480
          },
          {
            min: 24,
            max: 480
          },
          {
            min: 20,
            max: 480
          },
          {
            min: 16,
            max: 480
          },
          {
            min: 12,
            max: 160
          },
          {
            min: 8,
            max: 159
          }
        ],
        weekGuaranteedMinimum: 68,
        weekMax: 480
      },
      {
        pattern_number: 4,
        prices: [
          {
            min: 90,
            max: 90
          },
          {
            min: 90,
            max: 90
          },
          {
            min: 36,
            max: 126
          },
          {
            min: 32,
            max: 126
          },
          {
            min: 27,
            max: 180
          },
          {
            min: 23,
            max: 540
          },
          {
            min: 18,
            max: 540
          },
          {
            min: 14,
            max: 540
          },
          {
            min: 9,
            max: 540
          },
          {
            min: 27,
            max: 540
          },
          {
            min: 23,
            max: 540
          },
          {
            min: 18,
            max: 540
          },
          {
            min: 14,
            max: 180
          },
          {
            min: 9,
            max: 179
          }
        ],
        weekGuaranteedMinimum: 77,
        weekMax: 540
      },
      {
        pattern_number: 4,
        prices: [
          {
            min: 100,
            max: 100
          },
          {
            min: 100,
            max: 100
          },
          {
            min: 40,
            max: 140
          },
          {
            min: 35,
            max: 140
          },
          {
            min: 30,
            max: 200
          },
          {
            min: 25,
            max: 600
          },
          {
            min: 20,
            max: 600
          },
          {
            min: 15,
            max: 600
          },
          {
            min: 10,
            max: 600
          },
          {
            min: 30,
            max: 600
          },
          {
            min: 25,
            max: 600
          },
          {
            min: 20,
            max: 600
          },
          {
            min: 15,
            max: 200
          },
          {
            min: 10,
            max: 199
          }
        ],
        weekGuaranteedMinimum: 85,
        weekMax: 600
      },
      {
        pattern_number: 4,
        prices: [
          {
            min: 150,
            max: 150
          },
          {
            min: 150,
            max: 150
          },
          {
            min: 60,
            max: 210
          },
          {
            min: 53,
            max: 210
          },
          {
            min: 45,
            max: 300
          },
          {
            min: 38,
            max: 900
          },
          {
            min: 30,
            max: 900
          },
          {
            min: 23,
            max: 900
          },
          {
            min: 15,
            max: 900
          },
          {
            min: 45,
            max: 900
          },
          {
            min: 38,
            max: 900
          },
          {
            min: 30,
            max: 900
          },
          {
            min: 23,
            max: 300
          },
          {
            min: 15,
            max: 299
          }
        ],
        weekGuaranteedMinimum: 128,
        weekMax: 900
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
