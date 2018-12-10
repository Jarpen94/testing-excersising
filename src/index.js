const orders = [
    {
        name: 'Lager',
        price: 10
    },
    {
        name: 'APA',
        price: 15
    }
]

export const orderTotal = (arrayOfOrder) => {

    return arrayOfOrder.reduce(
        (reduced, item, index, array) => {
            reduced = reduced + item.price
            return reduced
        },
        0
    )
}

console.log(orderTotal(orders)) //should log 25

if (orderTotal(orders) !== 25) {
    throw new Error('Simple sum failed')
}

if (orderTotal([]) !== 0) {
    throw new Error('Simple sum failed')
}