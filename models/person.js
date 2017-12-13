const orm = require('orm')
import {connect} from './index'

let promise = new Promise((resolve, reject) => {
    connect.then((db) => {
        let Person = db.define("person", {
            name      : String,
            surname   : String,
            age       : Number, // FLOAT
            male      : Boolean,
            continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antarctica" ], // ENUM type
            photo     : Buffer, // BLOB/BINARY
            data      : Object // JSON encoded
        }, {
            methods: {
                fullName: function () {
                    return this.name + ' ' + this.surname;
                }
            },
            validations: {
                age: orm.enforce.ranges.number(18, undefined, "under-age")
            }
        })
        resolve(Person)
    }).catch((err) => {
        console.log(err)
        if (err) throw err;
    });
})

module.exports = {
    Person: promise
}