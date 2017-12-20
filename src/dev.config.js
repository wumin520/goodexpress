const options = {
    protocol: 'mysql',
    username: 'root',
    password: '',
    host: '127.0.0.1',
    port: '3307',
    database: 'mytest',
    query: { pool: true }
}

const userDbOptions = {
    host     : '127.0.0.1',
    port     : '3307',
    user     : 'root',
    password : '',
    database: 'advertisers'
}

export const  mysql = {
    options,
    userDbOptions
}