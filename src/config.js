import io from 'socket.io-client'

export default global.config = {
  socket: io()
}
