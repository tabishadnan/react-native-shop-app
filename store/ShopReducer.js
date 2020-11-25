const initialState = {
    counter : 0,
    availableProduct : [],
};

const ShopReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                counter : state.counter + 1,
            };

        default:
            return state;
    }
}
 
export default ShopReducer;