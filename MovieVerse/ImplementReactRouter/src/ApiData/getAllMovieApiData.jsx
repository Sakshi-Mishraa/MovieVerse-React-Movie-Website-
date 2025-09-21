import axios from 'axios';

export const getAllMovieApiData = async () => {
  try {
    const response = await axios.get("https://api.tvmaze.com/shows");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to Load Movies:", error.message);
  }
};
