import axios from 'axios';
import router from '@/router';
import { ROUTES } from '@/router/routes';
import { AUTH } from '@/constants';

const METHODS = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
};

const APIS = {
  BOARDS: '/boards',
  LOGIN: '/login',
};

const DOMAIN = 'http://localhost:3000';
const UNAUTHORIZED = 401;
const onUnAutorhized = () => {
  router.push(ROUTES.LOGIN);
};

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((res) => res.data)
    .catch((result) => {
      const { status } = result.response;
      if (status === UNAUTHORIZED) return onUnAutorhized();
      throw Error(result);
    });
};

export const setAuthInHeader = (token) => {
  axios.defaults.headers.common[AUTH] = token ? `Bearer ${token}` : null;
};

export const board = {
  fetch() {
    return request(METHODS.GET, APIS.BOARDS);
  },
  create(title) {
    return request(METHODS.POST, APIS.BOARDS, { title });
  },
};

export const auth = {
  login(email, password) {
    return request(METHODS.POST, APIS.LOGIN, { email, password });
  },
};
