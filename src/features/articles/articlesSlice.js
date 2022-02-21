import { createSlice } from '@reduxjs/toolkit';

const initialState = [
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
];

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    addArticle(state, action) {
      state.push(action.payload);
    },
    updateArticle(state, action) {
      const { id, name, amountInStock } = action.payload
      const existingArticle = state.find(article => article.id === id)
      if (existingArticle) {
        existingArticle.name = name
        existingArticle.amountInStock = amountInStock
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { addArticle, updateArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
