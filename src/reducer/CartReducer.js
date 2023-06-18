export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            console.log(action.payload);
            return {
                ...state,
                quantity: state.quantity + 1,
                cartItems: [
                    //...state.data.filter((p) => p.id === action.payload.id),
                    ...state.cartItems,
                    action.payload,
                ],
                total: state.total + action.payload.price,
            };

        case "REMOVE":
            return {
                ...state,
                quantity: state.quantity - 1,
                cartItems: [
                    ...state.cartItems.filter((p) => p.id !== action.payload.id),
                ],
                total: state.total - action.payload.price,
            };
        case "INC_QTY":
            return {
                ...state,
                cartItems: [...state, { qty: action.payload.qty + 1 }],
            };

        case "DEC_QTY":
            return {
                ...state,
                cartItems: [{ qty: action.payload.qty - 1 }],
            };
        default:
            return state;
    }
};