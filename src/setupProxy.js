const { createProxyMiddleware } = require('http-proxy-middleware')

const serverURL = process.env.REACT_APP_NODE_ENV === 'staging' ? 'https://oddgame.io' : 'http://localhost:5000'

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: serverURL,
      changeOrigin: true,
      ws: true
    })
  )
  app.use(
    '/socket.io',
    createProxyMiddleware({
      target: serverURL,
      changeOrigin: false,
      ws: false
    })
  )
}
