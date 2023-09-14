import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { newsProp, newsStateProp } from "../../interface";
import { fetchNews } from "../../api/newsApi";

const initialState: newsStateProp = {
  news: [],
  loading: true,
  error: ''
};

export const getNews = createAsyncThunk('news/getNews', async (params: {count: number, query: string}) => {
  const {count, query} = params;
  
  try {
    const { value } = await fetchNews(count, query); 
    return value;
  } catch (error) {    
    return error;
  }
})
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action: PayloadAction<newsProp[]>) => {
        state.loading = false;        
        state.news = action.payload;  
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;        
        state.error = action.error.message;
      })
  }
})

export default newsSlice.reducer;