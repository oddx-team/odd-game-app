import React from 'react'
import io from 'socket.io-client'

const socket = io()

export const SocketContext = React.createContext()

const SocketContextProvider = props => {
  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  )
}

export default SocketContextProvider
