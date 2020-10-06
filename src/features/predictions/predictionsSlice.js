import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
import { useAsyncStorage } from "@react-native-community/async-storage";
import Predictor from "./Predictor";
import { getSundayData } from "../turnips/turnipsSlice";

// predictions: [65, 70, 80, 90, 95, 100, 115, 150]
//  prices: [S,S,Mon_am,Mon_pm, Tes_am,Tues_pm,Wed_am,Wed_pm,Thurs_am,Thurs_pm,Fri_am,Fri_pm,Fri_am,Fri_pm,]
const initialState = {
  data: {
    bestDay: "monday",
    bestTime: "morning",
    currentIndex: 0,
    possibilities: [
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
            min: 70,
            max: 70
          },
          {
            min: 70,
            max: 70
          },
          {
            min: 28,
            max: 98
          },
          {
            min: 25,
            max: 98
          },
          {
            min: 21,
            max: 140
          },
          {
            min: 18,
            max: 420
          },
          {
            min: 14,
            max: 420
          },
          {
            min: 11,
            max: 420
          },
          {
            min: 7,
            max: 420
          },
          {
            min: 21,
            max: 420
          },
          {
            min: 18,
            max: 420
          },
          {
            min: 14,
            max: 420
          },
          {
            min: 11,
            max: 140
          },
          {
            min: 7,
            max: 139
          }
        ],
        weekGuaranteedMinimum: 60,
        weekMax: 420
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
            min: 95,
            max: 95
          },
          {
            min: 95,
            max: 95
          },
          {
            min: 38,
            max: 133
          },
          {
            min: 34,
            max: 133
          },
          {
            min: 29,
            max: 190
          },
          {
            min: 24,
            max: 570
          },
          {
            min: 19,
            max: 570
          },
          {
            min: 15,
            max: 570
          },
          {
            min: 10,
            max: 570
          },
          {
            min: 29,
            max: 570
          },
          {
            min: 24,
            max: 570
          },
          {
            min: 19,
            max: 570
          },
          {
            min: 15,
            max: 190
          },
          {
            min: 10,
            max: 189
          }
        ],
        weekGuaranteedMinimum: 81,
        weekMax: 570
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
            min: 115,
            max: 115
          },
          {
            min: 115,
            max: 115
          },
          {
            min: 46,
            max: 161
          },
          {
            min: 41,
            max: 161
          },
          {
            min: 35,
            max: 230
          },
          {
            min: 29,
            max: 690
          },
          {
            min: 23,
            max: 690
          },
          {
            min: 18,
            max: 690
          },
          {
            min: 12,
            max: 690
          },
          {
            min: 35,
            max: 690
          },
          {
            min: 29,
            max: 690
          },
          {
            min: 23,
            max: 690
          },
          {
            min: 18,
            max: 230
          },
          {
            min: 12,
            max: 229
          }
        ],
        weekGuaranteedMinimum: 98,
        weekMax: 690
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
  reducers: {
    updateCurrentIndex(state, action) {
      const { index } = action.payload;
      state.predictions.data.currentIndex = index;
    }
  }
});

export const { updateCurrentIndex } = predictionsSlice.actions;
export default predictionsSlice.reducer;

// export const {

// } = predictionsSlice.actions;

// export const getData = state => Object.values(state.predictions.data);
export const getThisPrediction = (state, index) => {
  Object.values(state.predictions.data.possibilities[index]);
};

export const getOutput = (state) => {
  const price = getSundayData(state);
  // console.log(`price: ${price}`)
  const index = calculateIndex(price);
  return state.predictions.data.possibilities[index];
};

// predictions: [65, 70, 80, 90, 95, 100, 115, 150]
export const calculateIndex = sundayPrice => {
  if (sundayPrice <= 65) {
    return 0;
  } else if (sundayPrice <= 70) {
    return 1;
  } else if (sundayPrice <= 80) {
    return 2;
  } else if (sundayPrice <= 90) {
    return 3;
  } else if (sundayPrice <= 95) {
    return 4;
  } else if (sundayPrice <= 100) {
    return 5;
  } else if (sundayPrice <= 115) {
    return 6;
  } else {
    return 7;
  }
};

// sell prices array [Sun, MondayAM, MondayPM, TuesdayAM, ...]

// export const calculatePrediction = (
//   state,
//   sellPrices,
//   firstBuy,
//   previousPattern
// ) => {
//   let predictor = new Predictor(sellPrices, firstBuy, previousPattern);
//   let analyzedPossibilities = predictor.analyze_possibilities();
//   return analyzedPossibilities;
// };
