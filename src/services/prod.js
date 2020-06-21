import axios from 'axios'

const API = '/api'

function api (method, svc, data = {}) {
  const url = `${API}/${svc}`

  const params = {
    method,
    url,
    data,
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
  logout () {
    return api('post', 'authenticate/logout')
  },
  getMe () {
    return api('get', 'authenticate/me')
  },
  getChats () {
    return api('get', 'chat')
  },
  getGlobalRooms () {
    return api('get', 'rooms/en')
  },
  getVnRooms () {
    return api('get', 'rooms/vi')
  },
  createRoom (payload, language) {
    return api('post', `rooms/${language}`, payload)
  }
}
