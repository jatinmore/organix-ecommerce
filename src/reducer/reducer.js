export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                data: action.payload,
                filteredData: action.payload
            }
        case "GET_CATEGORY":
            return {
                ...state,
                categoryData: action.payload
            }
        case "GET_PRODUCTDETAIL":
            return {
                ...state,
                productDetail: action.payload
            }

        case "SORT_PRICE":
            return {
                ...state,
                filteredData: action.payload === true ? state.data.sort((a, b) => b.price - a.price) : state.data.sort((a, b) => a.price - b.price)
            }

        case "FILTER_CATEGORY":
            console.log("called", action.payload)
            return {
                ...state,
                category: action.payload,
                filteredData: state.data.filter(({ categoryName }) => categoryName === action.payload)
            }

        case "SHOW_ALL":
            return {
                ...state,
                category: action.payload,
                filteredData: state.data.filter(({ categoryName }) => categoryName !== action.payload)
            }
        case "FILTER_BY_RATING":
            return {
                ...state,
                rating: action.payload,
                filteredData: state.data.filter(({ rating }) => rating >= action.payload)
            }

        case "SEARCH_PRODUCT":
            return {
                ...state,
                searchQuery: action.payload,
                filteredData: state.data.filter(({ name }) => name.toLowerCase().includes(action.payload.toLowerCase()))
            }

        case "CLEAR":
            return {
                ...state,
                filteredData: state.data,
                sortHighToLow: null,
                rating: 0,
                category: "",
                searchQuery: "",


            }
        default:
            return state
    }
}