import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { uniqueId } from 'lodash'
import { Container, StyledToast, CloseIcon, Title, Message } from './styled'
import { eventBus } from 'shared/utils/eventBus'
import { Toast } from 'shared/models'

const ToastBox: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const addToast = (toast: Toast) => {
      const id = uniqueId('toast-')
      setToasts((currentToasts: Toast[]) => [...currentToasts, { id, ...toast }])
      setTimeout(() => removeToast(id), toast.duration * 1000)
    }

    const unsubscribe = eventBus.subscribe('toast', addToast)
    return () => {
      unsubscribe()
    }
  }, [])

  const removeToast = (id: string) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
  }

  return (
    <Container>
      <TransitionGroup>
        {toasts.map((toast) => (
          <CSSTransition key={toast.id} classNames='odd-toast' timeout={200}>
            <StyledToast key={toast.id} type={toast.type} onClick={() => removeToast(toast.id as string)}>
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

export default ToastBox
