// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      password: 'docker',
      user: 'postgres',
      port: 5432,
      database: 'rant_hub'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'zromctcnuakpae',
      password: '81212d14772560f4d488b41855c4b2f451710aeaab3f39889984818fba0b11db',
      host: 'ec2-18-210-64-223.compute-1.amazonaws.com',
      port: 5432,
      database: 'de80s88alobo1f',
      ssl: {
        rejectUnauthorized: false
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
