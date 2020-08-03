module.exports = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'dbpwd',
        database: 'poc_server',
        charset: 'utf8'
    },
    migrations: { directory: './migrations' },
    seeds: { directory: './seeds' },
}