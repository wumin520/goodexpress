var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '3307',
    user     : 'root',
    password : '',
    database: 'advertisers'
});

let promise = new Promise((resolve, reject) => {
    let result = 0
    connection.connect();
    connection.query('SELECT * FROM account', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows[0].id);
        resolve(rows)
        result = rows
    });
    connection.end();
    return result
})

// let getSolution = (resolve) => {
//     let result = 0
//     connection.connect();
//     connection.query('SELECT * FROM account', function(err, rows, fields) {
//         if (err) throw err;
//         console.log('The solution is: ', rows[0].id);
//         console.log(rows)
//         resolve(rows)
//         result = rows
//     });
//     connection.end();
//     return result
// }
export default promise