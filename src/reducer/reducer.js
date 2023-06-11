export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                data: action.payload
            }
        case "GET_CATEGORY":
            return {
                ...state,
                categoryData: action.payload
            }

        default:
            return state
    }
}