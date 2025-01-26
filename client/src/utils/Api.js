import axios from 'axios';

const API_BASE_URL = 'http://localhost:9000/api/v1/markdown';

export const convertMarkdown = async (markdown) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/convert`, { markdown });
    return response.data.html;
  } catch (error) {
    console.error('Error converting Markdown:', error);
    throw error;
  }
};
