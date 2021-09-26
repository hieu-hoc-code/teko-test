import axios from 'axios'
import API_URL from './config'

const credentials = { withcredentials: true }

const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL
  },
  get(resource, params) {
    return axios.get(`${resource}`, params, credentials)
  },
}

export default ApiService
