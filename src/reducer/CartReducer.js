export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            console.log(action.payload.price);

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
                cartItems: action.payload,
            };

        case "DEC_QTY":
            return {
                ...state,
                cartItems: action.payload,
            };
        default:
            return state;
    }
};