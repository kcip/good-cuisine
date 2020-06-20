import axios from 'axios'

let apiUrl

const apiUrls = {
  production: 'https://sei-good-cuisine.herokuapp.com/api/',
  development: 'http://localhost:4000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: 'https://sei-good-cuisine.herokuapp.com/api/'
})

export default api