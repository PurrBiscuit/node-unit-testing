const logSymbols = require('log-symbols')

exports.logError = msg =>
  console.log('  ', logSymbols.error, 'ERROR: ', msg)

exports.logSuccess = msg =>
  console.log('  ', logSymbols.success, msg)


exports.starryPrinter = msg => {
  const starLines = '*'.repeat(msg.length + 4)
  const starPadding = `* ${' '.repeat(msg.length)} *`

  console.log(`${starLines}\n${starPadding}\n* ${msg} *\n${starPadding}\n${starLines}`)
}
