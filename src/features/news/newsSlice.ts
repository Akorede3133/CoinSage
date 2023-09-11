import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    const data = await fetchNews(count, query);
    console.log(data);
    return data
  } catch (error) {
    return error;
  }
})
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: {}
})

export default newsSlice.reducer;