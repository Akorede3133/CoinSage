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
  allTimeHigh: { price: string, timeStamp:number },
  links: {name: string, type: string, url: string}[],
  supply: { total: string, circulating: string},
  numberOfMarkets: number,
  numberOfExchanges: number,
}
export interface initialStateProp {
  loading: boolean,
  coins: coinProp[],
  searchedCoins: coinProp[]
  singleCoin: singleCoinProp,
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