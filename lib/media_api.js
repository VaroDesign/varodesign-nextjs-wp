import axios from 'axios';
const MEDIA_API_URL = process.env.MEDIA_API_URL;

export const getFeaturedImage = async (id) => {
    try {
      const res = await axios.get(`${MEDIA_API_URL}/${id}`);
      return res.data.guid.rendered;
    } catch (error) {
      console.log(error);
      return '';
    }
  };