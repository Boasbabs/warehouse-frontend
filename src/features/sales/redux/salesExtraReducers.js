import {
  getSales,
  updateSale,
  deleteSale,
  createSale
} from './salesThunk';

const extraReducers = {
  [getSales.pending]: (state) => {
    state.status = 'loading';
  },
  [getSales.fulfilled]: (state, action) => {
    state.status = 'success';
    state.sales = action.payload;
  },
  [getSales.rejected]: (state) => {
    state.status = 'failed';
  },
  [createSale.pending]: (state) => {
    state.status = 'loading';
  },
  [createSale.fulfilled]: (state, action) => {
    state.status = 'success';
    state.sales.push(action.payload);
  },
  [createSale.rejected]: (state) => {
    state.status = 'failed';
  },

  [updateSale.pending]: (state) => {
    state.status = 'loading';
  },
  [updateSale.fulfilled]: (state, action) => {
    state.status = 'success';
    state.singleSale = action.payload;
  },
  [updateSale.rejected]: (state) => {
    state.status = 'failed';
  },
  [deleteSale.pending]: (state) => {
    state.status = 'loading';
  },
  [deleteSale.fulfilled]: (state, action) => {
    state.status = 'success';
  },
  [deleteSale.rejected]: (state) => {
    state.status = 'failed';
  }
};

export default extraReducers;
