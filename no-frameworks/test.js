const { orderTotal } = require('../src/orders')

const {
  logError,
  logSuccess,
  starryPrinter
} = require('./utils')

const freeShippingOrderStub = {
  items: [
    { item: 'Dragon food', price: 8 },
    { item: 'Dragon cage (small)', price: 800 },
    { item: 'Shipping', price: 40, shipping: true }
  ]
}

const paidShippingOrderStub = {
  items: [
    { item: 'Dragon food', price: 8 },
    { item: 'Dragon toy', price: 20 },
    { item: 'Shipping', price: 20, shipping: true }
  ]
}

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

  console.log()

  if (error)
    throw new Error('An error was encountered during unit testing.  Review testing output for exact reason.')

  starryPrinter('no-frameworks test suite completed successfully!')
}

module.exports = runTest
