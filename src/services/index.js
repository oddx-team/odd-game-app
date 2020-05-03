export default (process.env.REACT_APP_NODE_ENV === 'development' && process.env.REACT_APP_NODE_ENV !== 'alpha'
  ? require('./dev').default
  : require('./prod').default);
