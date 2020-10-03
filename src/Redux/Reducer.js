import { products, pricingInfo } from '../React-products'
import {GET_EDIT_PRODUCT, UPDATE_PRODUCT} from './Actions'

const initialState = { products , pricingInfo }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EDIT_PRODUCT:
            const item = state.products.slice(action.payload,action.payload+1)
            return {...state, item, index: action.payload}
        case UPDATE_PRODUCT:
            return {
                ...state, 
                products: [...state.products.slice(0,action.index), 
                action.payload,
                ...state.products.slice(action.index+1)]
            }
        default:
            return state
    }
}

export default reducer