import { createSlice } from "@reduxjs/toolkit";

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
  coins: coinProp[],
  singleCoin: singleCoinProp,
}

const initialState: initialStateProp = {
  coins: [],
  singleCoin: {} as singleCoinProp,
}

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: {}
})

export default coinsSlice.reducer;