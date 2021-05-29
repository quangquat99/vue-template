import axios from 'axios'
import VueCookies from 'vue-cookies'

const token = VueCookies.get('Authorization')
const options = {
    headers: {
      Authorization: token,
    },
}

const axiosInstance = axios.create(options)

export default axiosInstance
