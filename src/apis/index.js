import axios from 'axios';
import router from '@/router';
import { ROUTES } from '@/router/routes';

const METHODS = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
};

const APIS = {
  BOARDS: '/boards',
};

const DOMAIN = 'http://localhost:3000';
const UNAUTHORIZED = 401;
const onUNAUTHORIZED = () => {
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
      if (status === UNAUTHORIZED) return onUNAUTHORIZED();
      throw Error(result);
    });
};

export const board = {
  fetch() {
    return request(METHODS.GET, APIS.BOARDS);
  },
};
