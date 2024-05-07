// src/api/axiosBaseQuery.ts
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axiosBase from './axiosBase';
import { AxiosError, AxiosRequestConfig } from 'axios';

const axiosBaseQuery = (
  { baseUrl } = { baseUrl: '' }
): BaseQueryFn<{
  url: string,
  method: AxiosRequestConfig['method'],
  data?: AxiosRequestConfig['data'],
  params?: AxiosRequestConfig['params']
}, unknown, unknown> => async ({ url, method, data, params }) => {
  try {
    const result = await axiosBase.request({ url: baseUrl + url, method, data, params });
    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    return {
      error: { status: err.response?.status, data: err.response?.data }
    };
  }
};

export default axiosBaseQuery;
