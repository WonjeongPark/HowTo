const environments = {
    development: {
      mysql: {
        username: 'root',
        password: 'howto@@',
        database: 'howto_db',
        host: '127.0.0.1',
        dialect: 'mysql'
      }
    },
  
    production: {
  
    }
  }
  
  const nodeEnv = process.env.NODE_ENV || 'development';
  
  module.exports = environments[nodeEnv];