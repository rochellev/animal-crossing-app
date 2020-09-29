import { configureStore } from "@reduxjs/toolkit";
import turnipsReducer from "../features/turnips/turnipsSlice";
import predictionsReducer from '../features/predictions/predictionsSlice';
export const getStore = () =>
  configureStore({
    reducer: {
      turnips: turnipsReducer,
      predictions: predictionsReducer
    }
  });
