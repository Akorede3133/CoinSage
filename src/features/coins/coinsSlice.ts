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
interface coinsProp {
  status: string,
  data: {stats: globalStatsProp, coins: coinProp[]}
}
interface globalStatsProp {
  totalCoins: number,
  totalMarketCap: string,
  total24hVolume: string,
  totalExchanges: number,
  totalMarkets: number,
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
  globalStats: globalStatsProp,
}

// https://coinranking1.p.rapidapi.com/coins?limit=50
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