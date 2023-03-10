function removeCartItem(currentCart, itemId) {
    return currentCart.filter((item)=> item.id !== itemId)
}

const reducer = (state, action) => {
    if(action.type === 'DISPLAY_ITEMS') {
        return {...state, cart: action.payload.items}
    }

    if(action.type === 'CALCULATE_TOTALS') {
        let { cartTotal, cartAmount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.cartTotal += itemTotal
                cartTotal.cartAmount += amount
                return cartTotal
            },
            {
                cartTotal: 0,
                cartAmount: 0,
            }
        )
        cartTotal = parseFloat(cartTotal.toFixed(2))
        return { ...state, total:cartTotal, amount:cartAmount }
    }

    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }

    if(action.type === 'REMOVE_ITEM') {
        const newCart = removeCartItem(state.cart, action.payload.itemID)
        return {...state, cart: newCart}
    }

    if(action.type === 'INCREASE_ITEM') {
        const newCart = state.cart.map((item)=> {
            if(item.id === action.payload.itemID) {
                return {...item, amount: item.amount +1}
            }
            return item
        })
        return {...state, cart: newCart}
    }

    if(action.type === 'DECREASE_ITEM') {
        const item = state.cart.find((item)=> item.id === action.payload.itemID)
        let newCart

        if (item.amount > 1) {
            newCart = state.cart.map((item)=> {
                if(item.id === action.payload.itemID) {
                    return {...item, amount: item.amount -1}
                } else {return item}
            })
        } else {
            newCart = removeCartItem(state.cart, action.payload.itemID)
        }

        return {...state, cart: newCart}
    }

    return state
}

export default reducer