import axios from 'axios';

const STATUS_CODE = {
  UNAUTHENTICATION_STATUS: 401,
};

const axiosInstance = axios.create({
  baseURL: '/api/v1',
  paramsSerializer(params) {
    const _params = new URLSearchParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key];
        if (Array.isArray(value)) {
          value.forEach(v => _params.append(key, v));
        } else if (typeof value === 'object') {
          _params.append(key, JSON.stringify(value));
        } else {
          _params.append(key, value);
        }
      });
    }
    return _params;
  },
});

axiosInstance.interceptors.request.use(config => {
  // request header config
  return config;
});

// Check the responding to validate session
axiosInstance.interceptors.response.use(
  response => {
    // On success
    return response;
  },
  error => {
    if (STATUS_CODE.UNAUTHENTICATION_STATUS === error.response.status) {
      console.log('Ex: Login lai di ban oi'); // TODO toast or something
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
