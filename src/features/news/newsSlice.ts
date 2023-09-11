import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newsProp, newsStateProp } from "../../interface";

const initialState: newsStateProp = {
  news: [],
  loading: true,
  error: ''
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: {}
})

export default newsSlice.reducer;