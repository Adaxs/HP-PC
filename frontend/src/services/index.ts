import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const compareProducts = async (productIds) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/compare`, { productIds });
        return response.data;
    } catch (error) {
        console.error('Error comparing products:', error);
        throw error;
    }
};

export const fetchUserRole = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}/role`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user role:', error);
        throw error;
    }
};