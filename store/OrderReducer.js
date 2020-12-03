const initialState = {
    orders: {},
    orderId: "",
    isShowDetail: false,
    amount : 0,
};

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_ORDER_ID":
            const orderId = action.orderId;
            return {
                ...state,
                orders: state.orderId = orderId,
            };

        case "ADD_ORDER":
            const order = action.order;
            const orderPrice = order[state.orderId].price;
            const orderTitle = order[state.orderId].title;
            const orderQty = order[state.orderId].qty;
            const ordersum = order[state.orderId].sum;
            let updatedOrNewCartItem;

            if (state.orders[state.orderId]) {
                // already have the item in the cart
                updatedOrNewCartItem = {
                    qty: state.orders[state.orderId].qty + orderQty,
                    price: orderPrice,
                    title: orderTitle,
                    sum: state.orders[state.orderId].price + ordersum,
                }

            } else {
                updatedOrNewCartItem = {
                    qty: orderQty,
                    price: orderPrice,
                    title: orderTitle,
                    sum: ordersum,
                }

            }

            return {
                ...state,
                orders: {...state.orders, [state.orderId] : updatedOrNewCartItem},
                amount: state.amount + action.totalAmount,
            };

            case "IS_SHOW_DETAIL":
            return {
                ...state,
                isShowDetail : state.isShowDetail = !state.isShowDetail,
            };
    }
    return state;
}

export default OrderReducer; 