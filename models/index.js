var orm = require("orm");
var options = {
    protocol: 'mysql',
    username: 'root',
    password: '',
    host: '127.0.0.1',
    port: '3307',
    database: 'mytest',
    query:    {pool: true}
}

orm.connectAsync(options)
    .then(function(db) {
        // connected
        // ...
        console.log('connected')
    })
    .catch(function() {
        console.error('Connection error: ' + err);
    });

module.exports = {
    connect: orm.connectAsync(options)
}