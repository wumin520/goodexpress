require('babel-register')
console.log(process.argv.config)
console.log(process.env)

const config = require(process.env.EXPRESS_CONFIG)
console.log(config.mysql)

console.log(__filename)

