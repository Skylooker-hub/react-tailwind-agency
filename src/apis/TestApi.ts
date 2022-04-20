import axios, { AxiosResponse } from 'axios';
import { APISchema, createRequestClient } from '@huang1997/axits';

interface TestAPISchema extends APISchema {
  get_ip: {
    request: {};
    response: {
      origin: string;
    };
  };
  get_delay: {
    request: {
      delay: number;
    };
    response: {};
  };
  post_delay: {
    request: {
      delay: number;
    };
    response: {};
  };
  get_base64: {
    request: {
      value: string;
    };
    response: string;
  };
  post_form: {
    request: {
      custname: string;
      custtel?: string;
      custemail?: string;
      delivery?: string;
      comments?: string;
    };
    response: AxiosResponse<{
      data: string;
    }>;
  };
  getLocalStorageValue: {
    request: {
      key: string;
    };
    response: string | null;
  };
}

const api = createRequestClient<TestAPISchema>({
  baseURL: 'https://httpbin.org/',
  timeout: 5000,
  errorHandler: err => {
    console.log('统一错误处理', err);
    return err;
  },
  requestInterceptor(config) {
    console.log('请求拦截！！');
    return Promise.resolve(config);
  },
  responseInterceptor(res) {
    console.log('响应拦截！！');
    // 这里对axios响应对象进行了处理
    return Promise.resolve(res.data);
  },
  apis: {
    get_ip: 'GET /ip',
    get_delay: {
      url: '/delay/:delay',
      method: 'GET',
    },
    post_delay: {
      url: '/delay/:delay',
      method: 'POST',
    },
    get_base64: 'GET /base64/:value',
    post_form: ({ custname }, options) => {
      const data = new URLSearchParams();
      data.append('custname', custname);
      return axios.post('https://httpbin.org/post', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        ...options,
      });
    },
    getLocalStorageValue({ key }) {
      return Promise.resolve(localStorage.getItem(key));
    },
  },
});

export default api;
