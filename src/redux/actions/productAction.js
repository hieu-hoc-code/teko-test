import { FETCH_PRODUCTS, FETCH_COLORS, CHANGE_ITEM_VALUE } from './types'
import ProductService from 'common/product.service'

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await ProductService.fetchProducts()
    const data = response.data
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data
    })
  } catch (err) {
    return false
  }
}

export const fetchColors = () => async (dispatch) => {
  try {
    const response = await ProductService.fetchColors()
    const data = response.data
    dispatch({
      type: FETCH_COLORS,
      payload: data
    })
  } catch (err) {
    return false
  }
}

export const handleItemValue = (val) => (dispatch) => {
  dispatch({
    type: CHANGE_ITEM_VALUE,
    payload: val
  })
}
