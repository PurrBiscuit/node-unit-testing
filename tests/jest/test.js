const { orderTotal } = require('../../src/orders')

const {
  freeShippingOrderStub,
  multipleQuantityOrderStub,
  noQuantityOrderStub,
  paidShippingOrderStub
} = require('../stubs')

describe('Order Totals', () => {
  it('Free shipping', () => {
    expect(orderTotal(freeShippingOrderStub)).toBe(808)
  })

  it('Multiple Quantities', () => {
    expect(orderTotal(multipleQuantityOrderStub)).toBe(200)
  })

  it('No Quantity', () => {
    expect(orderTotal(noQuantityOrderStub)).toBe(28)
  })

  it('Paid shipping', () => {
    expect(orderTotal(paidShippingOrderStub)).toBe(48)
  })
})
