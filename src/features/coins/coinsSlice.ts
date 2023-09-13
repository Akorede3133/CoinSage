import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateProp, globalStatsProp, singleCoinProp, coinsProp, SinglecoinDataProp, historyDataProp } from "../../interface";
import { fetchCoins, fetchHistory, fetchSingleCoin } from "../../api/coinsApi";

export const getCoins = createAsyncThunk('coins/getCoins', async (count: number) => {
  try {
    const result = await fetchCoins(count);
    return result;
  } catch (error) {
    return error;
  }
})
export const getCoin = createAsyncThunk('coins/getCoin', async (id: string) => {
  try {
    const result = await fetchSingleCoin(id);
    return result;
  } catch (error) {
    return error;
  }
})
export const getHistory = createAsyncThunk('coins/getHistory', async (obj: {id: string, period: string}) => {
  const { id, period } = obj;
  try {
    const result = await fetchHistory(id, period);
    return result;
  } catch (error) {
    return error;
  }
})


const initialState: initialStateProp = {
  loading: true,
  singleCoinLoading: true,
  historyLoading: true,
  coins: [],
  searchedCoins: [],
  history: [],
  singleCoin: {} as singleCoinProp,
  globalStats: {} as globalStatsProp,
  error: ''
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    searchCoins: (state, action: PayloadAction<string>) => {
      state.searchedCoins = state.coins.filter((coin) => coin.name.toLowerCase().includes(action.payload.toLowerCase()));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCoins.fulfilled, (state, action: PayloadAction<coinsProp> ) => {
        state.loading = false;        
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
      .addCase(getCoin.pending, (state) => {
        state.singleCoinLoading = true;
      })
      .addCase(getCoin.fulfilled, (state, action: PayloadAction<SinglecoinDataProp> ) => {
        state.singleCoinLoading = false;
        if (action.payload.message) {
          state.loading = false; 
          state.error = 'failed to fetch'         
          return;
        }        
        const { data: { coin }}  =  action.payload;
        state.singleCoin = coin;
      })
      .addCase(getCoin.rejected, (state, action) => {
        state.singleCoinLoading = false,
        state.error =  action.error.message;
      })
      .addCase(getHistory.pending, (state) => {
        state.historyLoading = true;
      })
      .addCase(getHistory.fulfilled, (state, action: PayloadAction<historyDataProp> ) => {
        state.historyLoading = false;
        if (action.payload.message) {
          state.loading = false; 
          state.error = 'failed to fetch'         
          return;
        }        
        const { data: { history }}  =  action.payload;
        state.history = history;
      })
      .addCase(getHistory.rejected, (state, action) => {
        state.historyLoading = false,
        state.error =  action.error.message;
      })
  }
});

export const { searchCoins } = coinsSlice.actions
export default coinsSlice.reducer;