export interface coinProp {
  uuid?: string,
  name: string,
  iconUrl: string,
  marketCap: string,
  price: string,
  rank: number,
  change: string,
}
export interface coinsProp {
  status: string,
  message?: string
  data: {stats: globalStatsProp, coins: coinProp[]}
}
export interface SinglecoinDataProp {
  status: string,
  message?: string
  data: {coin: singleCoinProp}
}
export interface historyDataProp {
  status: string,
  message?: string,
  data: historyProp,
}
export interface historyProp {
  history: historyItemProp[], 
  change: string
}
export interface historyItemProp  {
  price: string,
  timestamp: number, 
}
export interface globalStatsProp {
  totalCoins: number,
  totalMarketCap: string,
  total24hVolume: string,
  totalExchanges: number,
  totalMarkets: number,
}
export interface singleCoinProp extends coinProp {
  symbol: string,
  description: string,
  "24hVolume": string,
  allTimeHigh: { price: string },
  links: {name: string, type: string, url: string}[],
  supply: { total: string, circulating: string},
  numberOfMarkets: number,
  numberOfExchanges: number,
}
export interface initialStateProp {
  loading: boolean,
  singleCoinLoading: boolean,
  historyLoading: boolean,
  coins: coinProp[],
  searchedCoins: coinProp[]
  singleCoin: singleCoinProp,
  history: historyProp,
  error: string | undefined,
  globalStats: globalStatsProp,
}

export interface newsProp {
  name: string;
  url: string;
  image: { thumbnail: { contentUrl: string }};
  description: string;
  provider: { name: string, image:  { thumbnail: { contentUrl: string }}}[];
  datePublished: string;
}
export interface newsStateProp {
  news: newsProp[];
  loading: boolean;
  error: string | undefined;
}
