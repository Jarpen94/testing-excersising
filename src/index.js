export const orderTotal = (arrayOfOrders) => {
    const { preTotal, shipping } = arrayOfOrders.reduce(
        (reduced, item) => {
            if (item.shipping === true)
                reduced.shipping = item

            return {
                ...reduced,
                preTotal: (
                    item.quantity !== undefined ?
                        reduced.preTotal + (item.price * item.quantity)
                        :
                        reduced.preTotal + item.price
                )
            }
        },
        { preTotal: 0, shipping: null }
    )

    return (
        (
            shipping &&
            preTotal >= (shipping.freeShipping + shipping.price)
        ) ?
            preTotal - shipping.price
            :
            preTotal
    )
}

export const fetchOrdersAndCalculateTotal = () => (
    fetch('https://ad-snadbox.firebaseio.com/jfddl6/orders.json')
        .then(r => r.json())
        .then(data => orderTotal(data))
)