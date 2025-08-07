import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Change to your backend URL
    // No default Content-Type here, set per request
})

export default api