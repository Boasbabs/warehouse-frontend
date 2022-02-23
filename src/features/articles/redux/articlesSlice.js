import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './articlesExtraReducers';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    singleArticle: {},
    status: null
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
  },
  extraReducers: {
    ...extraReducers
  }
});

export const { addArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
