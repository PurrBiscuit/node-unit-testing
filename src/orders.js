const getShipping = items =>
  items.find(({ shipping }) => shipping).price


const calculateSubtotal = items =>
  items.filter(item => !item.shipping)
    .reduce((acc, cur) => acc + (cur.price * (cur.quantity || 1)), 0)

const calculateTotal = ({ subTotal, items, vat }) => {
  if (vat)
    return subTotal > 50 ? (subTotal * vat) : ((subTotal * vat) + getShipping(items))
  else
    return subTotal > 50 ? subTotal : (subTotal + getShipping(items))
}

const orderTotal = (fetch, { countryCode, items }) => {
  const subTotal = calculateSubtotal(items)

  if (countryCode) return fetch('https://vatapi.com/v1/country-code-check?code=' + countryCode)
    .then(res => res.json())
    .then(({ rates: { standard: { value: vat }}}) =>
      calculateTotal({ subTotal, items, vat: (1 + vat/100)})
    )

  return Promise.resolve(calculateTotal({ subTotal, items }))
}

module.exports = {
  orderTotal
}
