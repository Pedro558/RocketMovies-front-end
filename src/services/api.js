import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-rocketmovies-s3yj.onrender.com'
})