import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/query1`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/query2`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const fetchAltro = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/query3`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
