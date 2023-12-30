export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            console.log(state)
            return {
                ...state,
                cartItems: action.payload,
            };


        case "REMOVE":
            return {
                ...state,
                cartItems: action.payload,
            };
        case "INC_QTY":
            console.log(state.cartItems)
            return {

                ...state,
                cartItems: state.cartItems.map((item) => {
                    if (action.payload._id === item._id) {
                        return {
                            ...item,
                            qty: item.qty + 1
                        }
                    }
                    return item
                })
            };

        case "DEC_QTY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if (action.payload._id === item._id) {
                        return {
                            ...item,
                            qty: item.qty - 1
                        }
                    }
                    return item
                }),
            };

        default:
            return state;
    }
};