const { orderTotal } = require('../../src/orders')

const {
  logError,
  logSuccess,
  starryPrinter
} = require('./utils')

const {
  freeShippingOrderStub,
  multipleQuantityOrderStub,
  noQuantityOrderStub,
  paidShippingOrderStub
} = require('../stubs')

const runTest = async () => {
  let error = false
  const noop = () => {}
  starryPrinter('starting the no-test-runner test suite')

  console.log('\nOrder Total Unit Test:')
  console.log('-----------------------')

  if(await orderTotal(noop, freeShippingOrderStub) !== 808 ) {
    logError('Free shipping order total did not equal 808')
    error = true
  } else {
    logSuccess('Free shipping order total equals 808')
  }

  if(await orderTotal(noop, paidShippingOrderStub) !== 48 ) {
    logError('Shipping included order total did not equal 48')
    error = true
  } else {
    logSuccess('Shipping included order total equals 48')
  }

  if(await orderTotal(noop, multipleQuantityOrderStub) !== 200 ) {
    logError('Mulitple quantity order total did not equal 200')
    error = true
  } else {
    logSuccess('Multiple quantity order total equals 200')
  }

  if(await orderTotal(noop, noQuantityOrderStub) !== 28 ) {
    logError('No quantity given order total did not equal 28')
    error = true
  } else {
    logSuccess('No quantity given order total equals 28')
  }

  console.log()

  if (error)
    throw new Error('An error was encountered during unit testing.  Review testing output for exact reason.')

  starryPrinter('no-test-runner test suite completed successfully!')
}

module.exports = runTest
