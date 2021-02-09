const { orderTotal } = require('../../src/orders')

const {
  freeShippingOrderStub,
  multipleQuantityOrderStub,
  noQuantityOrderStub,
  paidShippingOrderStub,
  withCountryOrderStub
} = require('../stubs')

describe('Order Totals', () => {
  const noop = () => {}

  it('Free shipping', () => {
    orderTotal(noop, freeShippingOrderStub)
      .then(res => expect(res).toBe(808))
  })

  it('Multiple Quantities', () => {
    orderTotal(noop, multipleQuantityOrderStub)
      .then(res => expect(res).toBe(200))
  })

  it('No Quantity', () => {
    orderTotal(noop, noQuantityOrderStub)
      .then(res => expect(res).toBe(28))
  })

  it('Paid shipping', () => {
    orderTotal(noop, paidShippingOrderStub)
      .then(res => expect(res).toBe(48))
  })

  it('calls vatapi.com correctly', () => {
    let isfetchCalled = false;

    const fakeFetch = url => {
      expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
      isfetchCalled = true
    }

    orderTotal(fakeFetch, withCountryOrderStub)
      .then(res => {
        expect(isfetchCalled).toBe(true)
        expect(res).toBe(120)
      })
  })

  test.todo('if country code specified')
})
