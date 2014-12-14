var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'api'
    },
    port: 27017,
    db: 'mongodb://192.168.17.69/api-development'

  },

  test: {
    root: rootPath,
    app: {
      name: 'api'
    },
    port: 27017,
    db: 'mongodb://192.168.17.69/api-test'

  },

  production: {
    root: rootPath,
    app: {
      name: 'api'
    },
    port: 27017,
    db: 'mongodb://192.168.17.69/api-production'

  }
};

module.exports = config[env];
