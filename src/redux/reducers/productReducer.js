import { FETCH_PRODUCTS, FETCH_COLORS } from '../actions/types'

const initialState = {
  items: [],
  colors: [],
  testThoi: [],
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      }
    case FETCH_COLORS:
      return {
        ...state,
        colors: action.payload,
      }
    default:
      return state
  }
}

export default productReducer
