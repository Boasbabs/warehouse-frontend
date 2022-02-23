import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSales= createAsyncThunk(
  'sales/getSales',
  async () => {
    try {
      const response = await axios.get('http://localhost:7000/sales/');
      return response.data;
    } catch (error) {
      if (error.response?.status === 503) {
        toast.error('Server error. Try again later');
        return [];
      } else {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            'Something went wrong!'
        );
      }
    }
  }
);

export const updateSale = createAsyncThunk(
  'sales/updateSale',
  async (params) => {
    try {
      const response = await axios.patch(
        `http://localhost:7000/sales/${params.id}`,
        { ...params }
      );
      toast.success('Sale updated successfully');
      return response.data;
    } catch (error) {
      if (error.response?.status === 503) {
        toast.error('Server error. Try again later');
        return null;
      } else {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            'Something went wrong!'
        );
      }
    }
  }
);

export const deleteSale = createAsyncThunk(
  'sales/deleteSale',
  async (params) => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/sales/${params.id}`
      );
      toast.success('Sale delete successfully');
      return response.data;
    } catch (error) {
      if (error.response?.status === 503) {
        toast.error('Server error. Try again later');
        return null;
      } else {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            'Something went wrong!'
        );
      }
    }
  }
);

export const createSale = createAsyncThunk(
  'sales/createSale',
  async (params) => {
    try {
      const response = await axios.post(`http://localhost:7000/sales/`, {
        ...params
      });
      toast.success('Sale added successfully');
      return response.data;
    } catch (error) {
      if (error.response?.status === 503) {
        toast.error('Server error. Try again later');
        return [];
      } else {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            'Something went wrong!'
        );
      }
    }
  }
);
