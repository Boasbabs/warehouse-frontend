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
      if(error.response?.status) {
        return []
      }
      console.log(error.response?.data?.message ||
        error.message);
    }
  }
);
