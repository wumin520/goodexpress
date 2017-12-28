const mysql = require('mysql')
const orm = require('orm')


class Db {
  constructor(conf) {
    console.log('constructor', this)
    this.mysql_options = conf.mysql_options
    this.orm_options = conf.orm_options
  }

  db_mysql(dbname = 'advertisers') {
    let self = global.db
    console.log('db.js: db_mysql: connect options: ', self.mysql_options)
    let options = Object.assign({}, self.mysql_options, {database: dbname})
    return mysql.createConnection(options);
  }

  db_orm(dbname = 'mytest') {
    console.log('db.js: this; ', this)
    let self = global.db
    console.log('db.js: db_orm: connect options: ', self.orm_options)
    let options = Object.assign({}, self.orm_options, {database: dbname})
    return orm.connectAsync(options)
      .then(function (db) {
        console.log('db_orm connected')
        return db
      })
      .catch(function (err) {
        console.error('Connection error: ' + err);
      });
  }
}

export default Db