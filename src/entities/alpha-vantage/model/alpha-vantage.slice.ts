// TODO: placeholder slice, if needed, currently rtk covers all use cases
import { createSlice } from '@reduxjs/toolkit';

export interface AlphaVantageState {
  value: number;
}

const initialState: AlphaVantageState = {
  value: 0,
};

export const alphaVantageSlice = createSlice({
  name: 'alphaVantage',
  initialState,
  reducers: {},
});

export default alphaVantageSlice.reducer;
