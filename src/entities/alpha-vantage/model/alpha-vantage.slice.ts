import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AlphaVantageState {
  value: number;
}

const initialState: AlphaVantageState = {
  value: 0,
};

export const alphaVantageSlice = createSlice({
  name: 'alphaVantage',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  alphaVantageSlice.actions;

export default alphaVantageSlice.reducer;
