import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-rocketmovies-89r5.onrender.com'
})