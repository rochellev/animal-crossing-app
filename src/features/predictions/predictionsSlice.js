import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
import { useAsyncStorage } from "@react-native-community/async-storage";
const { getItem, setItem } = useAsyncStorage("@data");

const initialState = {
  data: {
    firstTimeBuyer: false,
    previousPattern: 'LARGE_SPIKE',

  }

}

const predictionsSlice = createSlice({
  name: "predictions",
  initialState,
  reducers: {
    
  }
});

export default predictionsSlice.reducer;

