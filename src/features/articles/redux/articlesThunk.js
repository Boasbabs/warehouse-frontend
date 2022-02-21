import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async () => {
    try {
      const response = await axios.get('http://localhost:7000/articles/');
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          'Something went wrong!'
      );
      if (error.response?.status === 503) {
        toast.error('Server error. Try again later');
        return [];
      }
    }
  }
);

export const updateArticle = createAsyncThunk(
  'articles/updateArticle',
  async (params) => {
    try {
      const response = await axios.patch(
        `http://localhost:7000/articles/${params.id}`,
        { name: params.name, amountInStock: params.amountInStock }
      );
      return response.data;
    } catch (error) {
      if (error.response?.status === 503) {
        toast.error('Server error. Try again later');
        return null;
      }
      toast.error(
        error.response?.data?.message ||
          error.message ||
          'Something went wrong!'
      );

      console.log(error.response?.data?.message || error.message);
    }
  }
);
