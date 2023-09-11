import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateProp, globalStatsProp, singleCoinProp, coinsProp } from "../../interface";
import { fetchCoins } from "../../api/coinsApi";

export const getCoins = createAsyncThunk('coins/getCoins', async (count: number) => {
  try {
    const result = await fetchCoins(count);
    return result;
  } catch (error) {
    return error;
  }
})


const initialState: initialStateProp = {
  loading: true,
  coins: [],
  singleCoin: {} as singleCoinProp,
  globalStats: {} as globalStatsProp,
  error: ''
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCoins.fulfilled, (state, action: PayloadAction<coinsProp> ) => {
        state.loading = false;
        console.log();
        if (action.payload.message) {
          state.loading = false; 
          state.error = 'failed to fetch'         
          return;
        }
        
        const {data: { coins, stats }} =  action.payload;
        state.globalStats = stats
        state.coins = coins;
      })
      .addCase(getCoins.rejected, (state, action) => {
        state.loading = false,
        state.error =  action.error.message;
      })
  }
});

export default coinsSlice.reducer;