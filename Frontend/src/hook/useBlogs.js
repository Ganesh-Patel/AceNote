// src/hooks/useBlog.js
import { useState, useCallback } from 'react';
import axiosInstance from '../config/axiosConfig';
import { API_URLS } from '../config/apiConfig';

const useBlog = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const performAction = useCallback(async (action, payload = {}) => {
    setLoading(true);
    setError(null);

    try {
      let response;

      if (action === 'getAll') {
        response = await axiosInstance.get(API_URLS.BLOGS);
      } else if (action === 'getById') {
        response = await axiosInstance.get(`${API_URLS.BLOGS}/${payload.id}`);
      } else if (action === 'create') {
        response = await axiosInstance.post(API_URLS.BLOGS, payload.data);
      } else if (action === 'update') {
        response = await axiosInstance.put(`${API_URLS.BLOGS}/${payload.id}`, payload.data);
      } else if (action === 'delete') {
        response = await axiosInstance.delete(`${API_URLS.BLOGS}/${payload.id}`);
      } else {
        throw new Error('Invalid action');
      }

      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, performAction };
};

export default useBlog;
