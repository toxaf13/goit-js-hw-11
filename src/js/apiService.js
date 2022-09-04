import axios from 'axios'
export default apiService 

axios.defaults.baseURL = 'https://pixabay.com/api/'
const API_KEY = '29663508-a6f6023c7276bab1ef0368c8d'

async function apiService(query, page, perPage) {
    const response = await axios.get(
      `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
    )
    return response
  }
