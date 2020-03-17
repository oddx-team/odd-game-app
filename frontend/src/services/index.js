/* eslint-disable global-require */
export default process.env.NODE_ENV === 'development'
  ? require('./dev').default
  : require('./prod').default;
