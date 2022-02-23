import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './salesExtraReducers';

const temp = [
  {
    id: 'a269a247-0d38-4b47-9630-79c9ae545b68',
    name: 'Dining Chair',
    articles: [
      {
        id: '0517f083-0e15-4876-8d1f-6fa45900431c',
        amountRequired: 4
      },
      {
        id: '831b92b8-677b-42cc-a585-335ea4ccccb6',
        amountRequired: 1
      },
      {
        id: 'addc65a8-c759-41d8-a18a-89fe446ad484',
        amountRequired: 8
      }
    ]
  },
  {
    id: '6fed6191-ee01-4563-a33d-5010abe0db36',
    name: 'Dining Table',
    articles: [
      {
        id: '0517f083-0e15-4876-8d1f-6fa45900431c',
        amountRequired: 4
      },
      {
        id: '6892b98b-9b87-4520-9a9e-7528f1d78cb4',
        amountRequired: 1
      },
      {
        id: 'addc65a8-c759-41d8-a18a-89fe446ad484',
        amountRequired: 8
      }
    ]
  }
];

export const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    sales: [],
    singleSale: {},
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

export default salesSlice.reducer;
