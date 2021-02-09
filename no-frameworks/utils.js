exports.starryPrinter = msg => {
  const starLines = '*'.repeat(msg.length + 4)
  const starPadding = `* ${' '.repeat(msg.length)} *`

  console.log(`${starLines}\n${starPadding}\n* ${msg} *\n${starPadding}\n${starLines}`)
}
