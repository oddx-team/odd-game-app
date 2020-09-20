import { eventBus } from './eventBus'

const ERROR_CODES = {
  username_len_short: 'Username must be from three characters!',
  username_picked: 'Username is picked already',
  error: 'Something went wrong!'
}

const SUCCESS_CODES = {
  login_success: 'Login successfully!',
  logout_success: 'Logout successfully!',
  save_success: 'Save successfully!'
}

const show = toast => eventBus.publish('toast', toast)

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
    duration: 1
  })
}

export default { show, error, success }
