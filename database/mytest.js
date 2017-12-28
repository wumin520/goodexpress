const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '3307',
  user     : 'root',
  password : ''
})
connection.query('CREATE DATABASE mytest', function (err, rows, fields) {
  console.log(err, rows, fields)
})