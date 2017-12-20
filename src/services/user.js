const mysql = require('mysql');
const options = gConfig.mysql.userDbOptions
const connection = mysql.createConnection(options);

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