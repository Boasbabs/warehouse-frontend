import { createSlice } from '@reduxjs/toolkit';
import { getArticles, updateArticle, deleteArticle } from './articlesThunk';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [
      {
        id: '0517f083-0e15-4876-8d1f-6fa45900431c',
        name: 'Leg',
        amountInStock: 12
      },
      {
        id: 'addc65a8-c759-41d8-a18a-89fe446ad484',
        name: 'Screw',
        amountInStock: 17
      },
      {
        id: '831b92b8-677b-42cc-a585-335ea4ccccb6',
        name: 'Seat',
        amountInStock: 2
      },
      {
        id: '6892b98b-9b87-4520-9a9e-7528f1d78cb4',
        name: 'Table Top',
        amountInStock: 1
      }
    ],
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
    }
    // updateArticle(state, action) {
    //   const { id, name, amountInStock } = action.payload;
    //   const existingArticle = state.articles.find(
    //     (article) => article.id === id
    //   );
    //   if (existingArticle) {
    //     existingArticle.name = name;
    //     existingArticle.amountInStock = amountInStock;
    //   }
    // }
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
    },

    [updateArticle.pending]: (state) => {
      state.status = 'loading';
    },
    [updateArticle.fulfilled]: (state, action) => {
      state.status = 'success';
      // state.articles = action.payload;
      console.log("action.payload;", action.payload)
    },
    [updateArticle.rejected]: (state) => {
      state.status = 'failed';
    },
     [deleteArticle.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteArticle.fulfilled]: (state, action) => {
      state.status = 'success';
    },
    [deleteArticle.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

// Action creators are generated for each case reducer function
export const { addArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
