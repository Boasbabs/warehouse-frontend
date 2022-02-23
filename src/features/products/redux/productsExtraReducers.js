import {
  getProducts,
  updateProduct,
  deleteProduct,
  createProduct
} from './productsThunk';

const extraReducers = {
  [getProducts.pending]: (state) => {
    state.status = 'loading';
  },
  [getProducts.fulfilled]: (state, action) => {
    state.status = 'success';
    state.products = action.payload;
  },
  [getProducts.rejected]: (state) => {
    state.status = 'failed';
  },
  [createProduct.pending]: (state) => {
    state.status = 'loading';
  },
  [createProduct.fulfilled]: (state, action) => {
    state.status = 'success';
    state.products.push(action.payload);
  },
  [createProduct.rejected]: (state) => {
    state.status = 'failed';
  },

  [updateProduct.pending]: (state) => {
    state.status = 'loading';
  },
  [updateProduct.fulfilled]: (state, action) => {
    state.status = 'success';
    state.singleProduct = action.payload;
  },
  [updateProduct.rejected]: (state) => {
    state.status = 'failed';
  },
  [deleteProduct.pending]: (state) => {
    state.status = 'loading';
  },
  [deleteProduct.fulfilled]: (state, action) => {
    state.status = 'success';
  },
  [deleteProduct.rejected]: (state) => {
    state.status = 'failed';
  }
};

export default extraReducers;
