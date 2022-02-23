import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts= createAsyncThunk(
  'products/getProducts',
  async () => {
    try {
      const response = await axios.get('http://localhost:7000/products/');
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

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (params) => {
    try {
      const response = await axios.patch(
        `http://localhost:7000/products/${params.id}`,
        { name: params.name, amountInStock: params.amountInStock }
      );
      toast.success('Product updated successfully');
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

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (params) => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/products/${params.id}`
      );
      toast.success('Product delete successfully');
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

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (params) => {
    try {
      const response = await axios.post(`http://localhost:7000/products/`, {
        name: params.name,
        amountInStock: params.amountInStock
      });
      toast.success('Product added successfully');
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
