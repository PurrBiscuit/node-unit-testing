const orderTotal = ({ items }) => {
  const itemsTotal = items
    .filter(item => !item.shipping)
    .reduce((acc, cur) => acc + cur.price, 0)

  const { price: shippingPrice } = items.find(({ shipping }) => shipping)

  const shipping = itemsTotal > 50 ? 0 : shippingPrice

  return itemsTotal + shipping
}

module.exports = {
  orderTotal
}
