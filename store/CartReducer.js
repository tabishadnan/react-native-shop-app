const initialState = {
    items : [],
    totalAmount : 0,
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                items : state.items.concat(action.product),
                
            };
            
        default:
            return state;
    }
}
 
export default CartReducer; 