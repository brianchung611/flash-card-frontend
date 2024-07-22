import axios from 'axios';

// Function to fetch data from the API
export const fetchData = async () => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

  try {
    const response = await axios.get(`${baseUrl}/cards`);
    return response.data;
  } catch (error) {
    // Handle any error that occurred during the API request
    console.error('Error fetching data:', error);
    throw error;
  }
};
