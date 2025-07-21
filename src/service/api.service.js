import axios from "axios";

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const REACT_APP_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': REACT_APP_PUBLIC_KEY.toString(),
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URI}/${url}`, options)
    return response.data
  }
}