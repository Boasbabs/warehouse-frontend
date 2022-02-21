import { configureStore } from '@reduxjs/toolkit';
import articlesReducer  from 'features/articles/redux/articlesSlice'

export default configureStore({
  reducer: {
      articles: articlesReducer
  }
});
