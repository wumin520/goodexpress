const orm_options = {
  protocol: 'mysql',
  username: 'root',
  password: '',
  host: '127.0.0.1',
  port: '3307',
  database: '',
  query: { pool: true }
}

const mysql_options = {
  host     : '127.0.0.1',
  port     : '3307',
  user     : 'root',
  password : '',
  database: ''
}

export const  db = {
  orm_options,
  mysql_options
}