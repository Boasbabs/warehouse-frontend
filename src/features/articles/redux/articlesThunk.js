import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async () => {
    try {
      const response = await axios.get(
        'http://localhost:7000/articles/'
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
