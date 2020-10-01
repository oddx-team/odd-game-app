import { eventBus } from './eventBus'
import { TOAST_CODES, Toast } from '../models'

const show = (toast: Toast) => eventBus.publish('toast', toast)

const success = (title: string) => {
  show({
    type: 'success',
    title: TOAST_CODES[title],
    duration: 0.8
  })
}

const error = (err: string) => {
  show({
    type: 'danger',
    title: 'Error',
    message: TOAST_CODES[err] || 'error',
    duration: 1
  })
}

export default { show, error, success }
