import { configureStore } from '@reduxjs/toolkit';
import salesReducer from 'features/sales/redux/salesSlice';
import articlesReducer from 'features/articles/redux/articlesSlice';
import productsReducer from 'features/products/redux/productsSlice';

export default configureStore({
  reducer: {
    sales: salesReducer,
    articles: articlesReducer,
    products: productsReducer
  }
});
