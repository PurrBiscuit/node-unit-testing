const { orderTotal } = require('../src/orders')

const {
  logError,
  logSuccess,
  starryPrinter
} = require('./utils')

const {
  freeShippingOrderStub,
  multipleQuantityOrderStub,
  paidShippingOrderStub
} = require('./stubs')

const runTest = () => {
  let error = false
  starryPrinter('starting the no-frameworks test suite')

  console.log('\nOrder Total Unit Test:')
  console.log('-----------------------')

  if(orderTotal(freeShippingOrderStub) !== 808 ) {
    logError('Free shipping order total did not equal 808')
    error = true
  } else {
    logSuccess('Free shipping order total equals 808')
  }

  if(orderTotal(paidShippingOrderStub) !== 48 ) {
    logError('Shipping included order total did not equal 48')
    error = true
  } else {
    logSuccess('Shipping included order total equals 48')
  }

  if(orderTotal(multipleQuantityOrderStub) !== 200 ) {
    logError('Mulitple quantity order total did not equal 200')
    error = true
  } else {
    logSuccess('Multiple quantity order total equals 200')
  }

  console.log()

  if (error)
    throw new Error('An error was encountered during unit testing.  Review testing output for exact reason.')

  starryPrinter('no-frameworks test suite completed successfully!')
}

module.exports = runTest
