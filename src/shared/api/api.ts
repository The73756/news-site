import axios from 'axios'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localstorage'

const baseURL = WEBPACK_IS_DEV ? 'http://localhost:5000' : 'https://api.example.com'

export const $api = axios.create({
  baseURL,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
  },
})
