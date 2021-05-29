import axios from 'axios'
import axiosInstance from '../../../plugins/axios'
const BASE_URL = process.env.VUE_APP_BASE_URL

export async function login (request) {
  const response = await axios.post(`${BASE_URL}/user/login`, request)
  return response
}

export async function changePassword (request) {
  try {
  const response = await axiosInstance.post(`${BASE_URL}/user/change-password`, request)
  return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function getProfile () {
  try {
  const response = await axiosInstance.get(`${BASE_URL}/user/get-detail`)
  return response.data
  } catch (error) {
    console.log(error)
  }
}
