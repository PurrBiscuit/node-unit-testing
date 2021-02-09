exports.freeShippingOrderStub = {
  items: [
    { item: 'Dragon food', price: 8 },
    { item: 'Dragon cage (small)', price: 800 },
    { item: 'Shipping', price: 40, shipping: true }
  ]
}

exports.paidShippingOrderStub = {
  items: [
    { item: 'Dragon food', price: 8 },
    { item: 'Dragon toy', price: 20 },
    { item: 'Shipping', price: 20, shipping: true }
  ]
}

exports.multipleQuantityOrderStub = {
  items: [
    { item: 'Dragon food', price: 8, quantity: 10},
    { item: 'Dragon toy', price: 20, quantity: 6 },
    { item: 'Shipping', price: 20, shipping: true }
  ]
}
