const orderTotal = order =>
  order.items.reduce((acc, cur) => acc + cur.price, 0 )

module.exports = {
  orderTotal
}
