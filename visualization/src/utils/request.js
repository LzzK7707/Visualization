import axios from 'axios';

const service = axios.create({
  baseURL: 'https://api.imooc-web.lgdsunday.club/api',
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    config.headers.icode = 'input you icode';
    return config
  }
);

// 响应拦截器
service.interceptors.response.use(
  error => {
    return Promise.reject(error);
  }
);

