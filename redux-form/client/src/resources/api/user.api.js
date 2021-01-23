import apiClient from './api-client';

export const getUserFormData = () => apiClient.get('/');

export const postUserFormData = (data) => apiClient.post('/', data);
