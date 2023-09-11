import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateProp, globalStatsProp, singleCoinProp, coinsProp } from "../../interface";
const baserUrl = 'https://coinranking1.p.rapidapi.com/'
const options = {
	method: 'GET',
	headers: {
    'x-rapidapi-key':'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
		// 'X-RapidAPI-Key': '2006fcddebmshb8e2fb348e572f5p13c9acjsn19e6f039cdde',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

export const getCoins = createAsyncThunk('coins/getCoins', async (count: number) => {
  try {
    const response = await fetch(`${baserUrl}coins?limit=${count}`, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
})

const initialState: initialStateProp = {
  loading: false,
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