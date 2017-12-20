var orm = require("orm");
let options = gConfig.mysql.options
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