import pubsub from 'sweet-pubsub'

const ERROR_CODES = {
  username_len_short: 'Username must be from three characters!',
  username_picked: 'Username is picked already',
  error: 'Something went wrong!'
}

const SUCCESS_CODES = {
  login_successful: 'Login successfully!',
  logout_successful: 'Logout successfully!'
}

const show = toast => pubsub.emit('toast', toast)

const success = title => {
  show({
    type: 'success',
    title: SUCCESS_CODES[title],
    duration: 0.8
  })
}

const error = err => {
  show({
    type: 'danger',
    title: 'Error',
    message: ERROR_CODES[err] || 'error',
    duration: 0.8
  })
}

export default { show, error, success }
