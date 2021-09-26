import { FETCH_PRODUCTS, FETCH_COLORS, CONVERT_COLOR_ID } from './types'
import ProductService from 'common/product.service'

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await ProductService.fetchProducts()
    const data = response.data
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const fetchColors = () => async (dispatch) => {
  try {
    const response = await ProductService.fetchColors()
    const data = response.data
    dispatch({
      type: FETCH_COLORS,
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
}

