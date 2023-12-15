import axios, { AxiosError, AxiosResponse } from 'axios';
import { isArray, get } from 'lodash';

import { APIError } from '../types/api';
const onRejected = (error: AxiosError): Promise<APIError> => {
  const handled: any = get(error, 'response.data', {
    statusCode: 500,
    status: 'failed',
    error: 'Something went wrong, please try again later',
    message: ['Something went wrong, please try again later'],
    timestamp: '',
    path: '',
  } as APIError);

  if (isArray(handled.message)) handled.message = handled.message[0];

  return Promise.reject(handled);
};

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_GATEWAY_PROD
      : process.env.REACT_APP_API_GATEWAY_DEV,
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
    timeout: 30000,
  },
  // validateStatus: (status) => status <= 500,
});

instance.interceptors.response.use((res: AxiosResponse) => Promise.resolve(res), onRejected);

export default instance;
