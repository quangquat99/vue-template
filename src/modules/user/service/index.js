import axios from '../../../plugins/axios'

const BASE_URL = process.env.VUE_APP_BASE_URL
export async function getAllUser () {
  try {
    const respone = await axios.get(`${BASE_URL}/admin/get-all-user`)
    return respone.data
  } catch (error) {
    console.log(error)
  }
}
