import axios from 'axios'
import utils from 'utils'

const API = '/api'

function api (method, svc, data = {}) {
  const url = `${API}/${svc}`

  const params = {
    method,
    url,
    data: utils.snakifyKeys(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return axios(params).then(resp => resp.data)
}

export default {
  registerUsername (username) {
    return api('post', 'authenticate/register', { username })
  },
  getMe () {
    return api('get', 'authenticate/me')
  },
  getChats () {
    return api('get', 'chat')
  },
  getEnglishRooms () {
    return api('get', 'rooms/en')
  },
  getVietnameseRooms () {
    return api('get', 'rooms/vi')
  }
}
