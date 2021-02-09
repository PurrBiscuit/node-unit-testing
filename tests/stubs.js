exports.freeShippingOrderStub = {
  items: [
    { item: 'Dragon food', price: 8, quantity: 1 },
    { item: 'Dragon cage (small)', price: 800, quantity: 1 },
    { item: 'Shipping', price: 40, shipping: true }
  ]
}

exports.multipleQuantityOrderStub = {
  items: [
    { item: 'Dragon food', price: 8, quantity: 10},
    { item: 'Dragon toy', price: 20, quantity: 6 },
    { item: 'Shipping', price: 20, shipping: true }
  ]
}

exports.noQuantityOrderStub = {
  items: [
    { item: 'Dragon food', price: 8 },
    { item: 'Shipping', price: 20, shipping: true }
  ]
}

exports.paidShippingOrderStub = {
  items: [
    { item: 'Dragon food', price: 8, quantity: 1 },
    { item: 'Dragon toy', price: 20, quantity: 1 },
    { item: 'Shipping', price: 20, shipping: true }
  ]
}

exports.withCountryOrderStub = {
  countryCode: 'DE',
  items: [
    { item: 'Dragon Waffles', price: 40, quantity: 3 },
    { item: 'Shipping', price: 20, shipping: true }
  ]
}
