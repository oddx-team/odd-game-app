import pubsub from 'sweet-pubsub'

const ERROR_CODES = {
  username_len_short: 'Username must be from three characters!',
  username_picked: 'Username is picked already'
}

const show = toast => pubsub.emit('toast', toast)

const success = title => show({ title })

const error = err => {
  show({
    type: 'danger',
    title: 'Error',
    message: ERROR_CODES[err] || 'message',
    duration: 0.8
  })
}

export default { show, error, success }
