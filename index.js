const hello = require('./hello')

hello()

const random = require('./random')
// console.log(process.argv[2])
const max = Number(process.argv[2])
console.log(random(max))