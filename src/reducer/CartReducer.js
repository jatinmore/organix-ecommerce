export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
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
                }),
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
        
        case "EMPTY_CART":
            return{
                cartItems:[]
            }
        default:
            return state;
    }
};