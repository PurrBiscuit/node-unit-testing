const orderTotal = (fetch, { countryCode, items }) => {
  if (countryCode) fetch('https://vatapi.com/v1/country-code-check?code=' + countryCode)
  const itemsTotal = items
    .filter(item => !item.shipping)
    .reduce((acc, cur) => acc + (cur.price * (cur.quantity || 1)), 0)

  const { price: shippingPrice } = items.find(({ shipping }) => shipping)

  const shipping = itemsTotal > 50 ? 0 : shippingPrice

  return Promise.resolve(itemsTotal + shipping)
}

module.exports = {
  orderTotal
}
