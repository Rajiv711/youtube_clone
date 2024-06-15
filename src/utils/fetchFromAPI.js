import axios from 'axios'

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": '4ecd118dadmsh5f66ccba266bfeep10c464jsn3d63abba23f8',
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {

  
  try {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }

};
