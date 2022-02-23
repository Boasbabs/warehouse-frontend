import {
  getArticles,
  updateArticle,
  deleteArticle,
  createArticle
} from './articlesThunk';

const extraReducers = {
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
  [createArticle.pending]: (state) => {
    state.status = 'loading';
  },
  [createArticle.fulfilled]: (state, action) => {
    state.status = 'success';
    state.articles.push(action.payload);
  },
  [createArticle.rejected]: (state) => {
    state.status = 'failed';
  },

  [updateArticle.pending]: (state) => {
    state.status = 'loading';
  },
  [updateArticle.fulfilled]: (state, action) => {
    state.status = 'success';
    state.singleArticle = action.payload;
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
};

export default extraReducers;
