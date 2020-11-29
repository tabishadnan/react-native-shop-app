const initialState = {
    items: [],
    totalAmount: 0,
    quantity: 0,
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const price = action.product.price;
            return {
                ...state,
                items: state.items.concat(action.product),
                totalAmount: state.totalAmount + price,
            };

        case "DELETE_CART_ITEM":
            const newArr = state.items.filter(item => item.id.indexOf(action.id));
            return {
                ...state,
                items: state.items = newArr,
            };

        default:
            return state;
    }
}

export default CartReducer; 