const db = global.db.db_mysql()

db.connect();
export const getAll = () => {
  let promise = new Promise((resolve, reject) => {
    let result = []
    db.query('SELECT * FROM account', function (err, rows, fields) {
      if (err) {
        reject(err)
        throw err;
      }
      console.log('The solution is: ', rows[0].id);
      console.log(fields)
      resolve(rows)
      result = rows
    });
    // db.end();
    return result
  })
  return promise
}

export default {
  getAll
}