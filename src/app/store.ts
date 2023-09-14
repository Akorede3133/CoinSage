import { configureStore } from '@reduxjs/toolkit'
import coinsSlice from '../features/coins/coinsSlice';
import newsSlice from '../features/news/newsSlice';
export const store = configureStore({
  reducer: {
    coins: coinsSlice,
    news: newsSlice,
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;