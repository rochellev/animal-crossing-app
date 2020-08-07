import { configureStore } from "@reduxjs/toolkit";
import turnipsReducer from "../features/turnips/turnipsSlice";
export const getStore = () =>
  configureStore({
    reducer: {
      turnips: turnipsReducer
    }
  });
