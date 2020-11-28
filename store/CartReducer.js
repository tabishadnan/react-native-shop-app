const initialState = {
    items : [],
    totalAmount : 0,
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const price = action.product.price;
            return {
                ...state,
                items : state.items.concat(action.product.price),
                totalAmount : state.totalAmount + price,
            };
            
        default:
            return state;
    }
}
 
export default CartReducer; 