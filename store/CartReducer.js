const initialState = {
    items: {},
    totalAmount: 0,
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let updatedOrNewCartItem;

            if (state.items[addedProduct.id]) {
                // already have the item in the cart
                updatedOrNewCartItem = {
                    qty: state.items[addedProduct.id].qty + 1,
                    price: state.items[addedProduct.id].price + prodPrice,
                    title: prodTitle,
                    sum: state.items[addedProduct.id].price + prodPrice,
                }

            } else {
                updatedOrNewCartItem = {
                    qty: 1,
                    price: prodPrice,
                    title: prodTitle,
                    sum: prodPrice,
                }

            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice
            };

        case "DELETE_CART_ITEM":
            const cItemCopy = { ...state.items };
            delete cItemCopy[action.id];

            return {
                ...state,
                totalAmount: state.totalAmount - state.items[action.id].sum,
                items: cItemCopy,
            };

        case "EMPTY_ITEM":
            return {
                ...state,
                items: state.items = {},
                totalAmount : state.totalAmount = 0,
            };

    }
    return state;
}

export default CartReducer; 