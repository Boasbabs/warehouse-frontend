import { configureStore } from '@reduxjs/toolkit';
import articlesReducer  from 'features/articles/redux/articlesSlice'
import productsReducer  from 'features/products/redux/productsSlice'
 

export default configureStore({
  reducer: {
      articles: articlesReducer,
      products: productsReducer,
  }
});
