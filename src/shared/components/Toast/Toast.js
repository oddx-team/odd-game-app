import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { uniqueId } from 'lodash'
import { Container, StyledToast, CloseIcon, Title, Message } from './styled'

import pubsub from 'sweet-pubsub'

const Toast = () => {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const addToast = (toast) => {
      const id = uniqueId('toast-')
      setToasts(currentToasts => [...currentToasts, { id, ...toast }])
      setTimeout(() => removeToast(id), toast.duration * 1000)
    }

    pubsub.on('toast', addToast)
    return () => {
      pubsub.off('toast', addToast)
    }
  }, [])

  const removeToast = id => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id))
  }

  return (
    <Container>
      <TransitionGroup>
        {toasts.map(toast => (
          <CSSTransition key={toast.id} classNames='odd-toast' timeout={200}>
            <StyledToast key={toast.id} type={toast.type} onClick={() => removeToast(toast.id)}>
              <CloseIcon type='close' />
              {toast.title && <Title>{toast.title}</Title>}
              {toast.message && <Message>{toast.message}</Message>}
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  )
}

export default Toast
