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
  paidShippingOrderStub,
  withCountryOrderStub
} = require('../stubs')

const runTest = async () => {
  let error = false
  starryPrinter('starting the no-test-runner test suite')

  console.log('\nOrder Total Unit Test:')
  console.log('-----------------------')

  if (await orderTotal(null, freeShippingOrderStub) !== 808) {
    logError('Free shipping order total did not equal 808')
    error = true
  } else {
    logSuccess('Free shipping order total equals 808')
  }

  if (await orderTotal(null, paidShippingOrderStub) !== 48) {
    logError('Shipping included order total did not equal 48')
    error = true
  } else {
    logSuccess('Shipping included order total equals 48')
  }

  if (await orderTotal(null, multipleQuantityOrderStub) !== 200) {
    logError('Mulitple quantity order total did not equal 200')
    error = true
  } else {
    logSuccess('Multiple quantity order total equals 200')
  }

  if (await orderTotal(null, noQuantityOrderStub) !== 28) {
    logError('No quantity given order total did not equal 28')
    error = true
  } else {
    logSuccess('No quantity given order total equals 28')
  }

  const withCountryTotal = withCountryOrderStub.items[0].price * withCountryOrderStub.items[0].quantity * 1.19

  const fakeFetch = url =>
    Promise.resolve({
      json: () => Promise.resolve({
        rates: {
          standard: {
            value: 19
          }
        }
      })
    })

  if (await orderTotal(fakeFetch, withCountryOrderStub) !== withCountryTotal) {
    logError(`Country code given order total did not equal ${withCountryTotal}`)
    error = true
  } else {
    logSuccess(`Country code given order total equals ${withCountryTotal}`)
  }

  console.log()

  if (error)
    throw new Error('An error was encountered during unit testing.  Review testing output for exact reason.')

  starryPrinter('no-test-runner test suite completed successfully!')
}

module.exports = runTest
