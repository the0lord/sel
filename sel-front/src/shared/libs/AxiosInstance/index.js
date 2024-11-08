import axios from 'axios';
import { toast } from 'react-toastify';
import config from 'shared/config/config';

function getCSRFToken() {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrftoken'))
    ?.split('=')[1];
  return cookieValue;
}
const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'X-CSRFToken': getCSRFToken()
  }
});

axiosInstance.interceptors.request.use(async (config) => {
  config.params = config.params || {};
  const token = (localStorage.getItem('token'));
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  config.headers['Accept-Language'] = 'en';
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      store.dispatch(setToken(null));
      localStorage.clear();
      return Promise.reject(error);
    }
    if (error.response.status === 400) {
      const message = error?.response?.data?.error?.Error
      if (error?.response?.data?.error?.Error) {
        toast.error(message);
      }
      return Promise.reject(error)
    } else if (error.response.status > 499) {
      toast.error('Произошла ошибка на сервере. Обратитесь к разработчикам!');
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;