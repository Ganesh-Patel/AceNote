// src/hooks/useUser.js
import { useState, useCallback } from 'react';
import axiosInstance from '../config/axiosConfig';
import { API_URLS } from '../config/apiConfig';

const useUser = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const performAction = useCallback(async (action, payload = {}) => {
    setLoading(true);
    setError(null);

    try {
      let response;

      if (action === 'getAll') {
        response = await axiosInstance.get(API_URLS.USERS);
      } else if (action === 'getById') {
        response = await axiosInstance.get(`${API_URLS.USERS}/${payload.id}`);
      } else if (action === 'create') {
        response = await axiosInstance.post(API_URLS.USERS, payload.data);
      } else if (action === 'update') {
        response = await axiosInstance.put(`${API_URLS.USERS}/${payload.id}`, payload.data);
      } else if (action === 'delete') {
        response = await axiosInstance.delete(`${API_URLS.USERS}/${payload.id}`);
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

export default useUser;
