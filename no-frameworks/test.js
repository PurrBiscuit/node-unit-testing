const logSymbols = require('log-symbols')

const { starryPrinter } = require('./utils')
const { orderTotal } = require('../src/orders')

const runTest = () => {
  let error = false
  starryPrinter('starting the no-frameworks test suite')

  console.log('\nOrder Total Unit Test:')
  console.log('-----------------------')

  if(orderTotal({
    items: [
      { item: 'Dragon food', price: 8 },
      { item: 'Dragon cage (small)', price: 800 }
    ]
  }) !== 808 ) {
    console.log('  ', logSymbols.error, 'ERROR: Order Total did not equal 808')
    error = true
  } else {
    console.log('   ', logSymbols.success, 'Order Total equals 808')
  }

  if (error)
    throw new Error('An error was encountered during unit testing.  Review testing output for exact reason.')

  console.log()
  starryPrinter('no-frameworks test suite completed successfully!')
}

module.exports = runTest
