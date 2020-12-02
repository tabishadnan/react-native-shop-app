const initialState = {
    orders: [],
    isShowDetail: false,
};

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ORDER":
            const order = action.order
            return {
                ...state,
                items: [...state.orders, order],
            };
    }
    return state;
}

export default OrderReducer; 