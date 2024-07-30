import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL;

export const getAllCards = async () => {
  try {
    const response = await axios.get(`${baseUrl}/cards`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getCard = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/cards/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching card:', error);
    throw error;
  }
}

export const addCard = async (card) => {
  try {
    const response = await axios.post(`${baseUrl}/cards`, card);
    return response.data;
  } catch (error) {
    console.error('Error adding card:', error);
    throw error;
  }
}

export const updateCard = async (id, card) => {
  try {
    const response = await axios.put(`${baseUrl}/cards/${id}`, card);
    return response.data;
  } catch (error) {
    console.error('Error updating card:', error);
    throw error;
  }
}

export const deleteCard = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/cards/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting card:', error);
    throw error;
  }
}