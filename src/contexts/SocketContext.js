import React, { useState } from 'react'
import io from 'socket.io-client'

export const SocketContext = React.createContext()

const SocketContextProvider = props => {
  const [socket, setSocket] = useState(io())

  const createSocket = () => {
    console.log('create socket')
    setSocket(io())
  }

  const closeSocket = () => {
    console.log('close socket')
    socket.disconnect()
    socket.close()
  }

  return (
    <SocketContext.Provider value={{ socket, createSocket, closeSocket }}>
      {props.children}
    </SocketContext.Provider>
  )
}

export default SocketContextProvider
