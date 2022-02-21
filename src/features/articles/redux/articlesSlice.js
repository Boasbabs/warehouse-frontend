import { createSlice } from '@reduxjs/toolkit';
import { getArticles } from './articlesThunk';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: null
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    addArticle(state, action) {
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };
    },
    updateArticle(state, action) {
      const { id, name, amountInStock } = action.payload;
      const existingArticle = state.articles.find(
        (article) => article.id === id
      );
      if (existingArticle) {
        existingArticle.name = name;
        existingArticle.amountInStock = amountInStock;
      }
    }
  },
  extraReducers: {
    [getArticles.pending]: (state) => {
      state.status = 'loading';
    },
    [getArticles.fulfilled]: (state, action) => {
      state.status = 'success';
      state.articles = action.payload;
    },
    [getArticles.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

// Action creators are generated for each case reducer function
export const { addArticle, updateArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
