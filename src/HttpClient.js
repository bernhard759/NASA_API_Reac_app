import axios from "axios"

// Endpoint and API key
const nasaEndpoint = import.meta.env.VITE_APP_NASA_ENDPOINT
const nasaApiKey = import.meta.env.VITE_APP_NASA_API_KEY

axios.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {}
    const configUrl = config.url
    // Send api key for nasa requests
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  getApod() {
    return axios.get(`${nasaEndpoint}planetary/apod`)
  },
}
