import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface coinProp {
  uuid: string,
  name: string,
  iconUrl: string,
  marketCap: string,
  price: string,
  rank: number,
  change: string,
}
interface singleCoinProp extends coinProp {
  symbol: string,
  description: string,
  "24hVolume": string,
  allTimeHigh: { price: string, timeStamp:number },
  links: {name: string, type: string, url: string}[],
  supply: { total: string, circulating: string},
  numberOfMarkets: number,
  numberOfExchanges: number,

}
interface initialStateProp {
  loading: boolean,
  coins: coinProp[],
  singleCoin: singleCoinProp,
  error: string | undefined,
}

const url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2006fcddebmshb8e2fb348e572f5p13c9acjsn19e6f039cdde',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  try {
    const response = await fetch(url, options);
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
      .addCase(getCoins.fulfilled, (state, action: PayloadAction<coinProp[]> ) => {
        state.loading = false;
        state.coins = action.payload;
      })
      .addCase(getCoins.rejected, (state, action) => {
        state.loading = false,
        state.error =  action.error.message;
      })
  }
});

export default coinsSlice.reducer;