const orm = require('orm')

class Person {
  constructor (app, conf) {
    app.use(orm.express(conf.db.orm_options, {
      define: function (db, models, next) {
        models.person = db.define('person', {
          name      : String,
          surname   : String,
          age       : Number, // FLOAT
          male      : Boolean,
          continent : ['Europe', 'America', 'Asia', 'Africa', 'Australia', 'Antarctica'], // ENUM type
          photo     : Buffer, // BLOB/BINARY
          data      : Object // JSON encoded
        }, {
          methods: {
            fullName: function () {
              return this.name + ' ' + this.surname;
            }
          },
          validations: {
            age: orm.enforce.ranges.number(18, undefined, 'under-age')
          }
        })
        next();
      }
    }));
  }
}

export default Person