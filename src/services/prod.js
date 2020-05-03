import axios from 'axios';
import utils from '../utils';

const API = '/api';

// store access_token
let token = utils.getParam('access_token');
if (token) localStorage.setItem('TOKEN', token);
else token = localStorage.getItem('TOKEN');

function api(method, svc, data = {}) {
  const url = `${API}/${svc}`;

  const params = {
    method,
    url,
    data: utils.snakifyKeys(data),
    headers: {
      'Content-Type': 'application/json',
      'Sso-Token': token,
    },
    withCredentials: true,
  };
  return axios(params).then(resp => utils.camelizeKeys(resp.data));
}

export default {
  getProfile() {
    return api('get', 'profile');
  },
  getChats() {
    return api('get', 'v1/chat');
  },
};
