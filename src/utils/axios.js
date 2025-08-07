import axios from 'axios'

const apiUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000/api'

const api = axios.create({
    baseURL: apiUrl, // Change to your backend URL
    // No default Content-Type here, set per request
})

export default api