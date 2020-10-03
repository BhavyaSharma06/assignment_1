export const GET_EDIT_PRODUCT = 'GET_EDIT_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const getEditProduct = (index) => {
    return{
        type: GET_EDIT_PRODUCT,
        payload:index
    }
}
export const updateProduct = (item,id,index) => {
    return{
        type: UPDATE_PRODUCT,
        payload:item,
        id,index
    }
}  