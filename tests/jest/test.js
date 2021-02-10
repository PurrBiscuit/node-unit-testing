const { orderTotal } = require('../../src/orders')

const {
  freeShippingOrderStub,
  multipleQuantityOrderStub,
  noQuantityOrderStub,
  paidShippingOrderStub,
  withCountryOrderStub
} = require('../stubs')

describe('Order Totals', () => {
  it('Free shipping', () => {
    orderTotal(null, freeShippingOrderStub)
      .then(res => expect(res).toBe(808))
  })

  it('Multiple Quantities', () => {
    orderTotal(null, multipleQuantityOrderStub)
      .then(res => expect(res).toBe(200))
  })

  it('No Quantity', () => {
    orderTotal(null, noQuantityOrderStub)
      .then(res => expect(res).toBe(28))
  })

  it('Paid shipping', () => {
    orderTotal(null, paidShippingOrderStub)
      .then(res => expect(res).toBe(48))
  })

  it('calls vatapi.com correctly if country code specified', () => {
    const fakeFetch = url => {
      expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
      return Promise.resolve({
        json: () => Promise.resolve({
          rates: {
            standard: {
              value: 19
            }
          }
        })
      })
    }

    return orderTotal(fakeFetch, withCountryOrderStub)
      .then(res => {
        expect(res).toBe(withCountryOrderStub.items[0].price * withCountryOrderStub.items[0].quantity * 1.19)
      })
  })
})
