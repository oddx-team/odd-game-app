const { createProxyMiddleware } = require('http-proxy-middleware');

const serverURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://oddgame.io';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: serverURL,
      changeOrigin: true,
      ws: true,
    }),
  );
};
