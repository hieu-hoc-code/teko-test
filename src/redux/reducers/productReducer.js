import {
  FETCH_PRODUCTS,
  FETCH_COLORS,
  CHANGE_ITEM_VALUE,
} from '../actions/types'
import changeItemValue from 'utils/changeItemValue'

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
    case CHANGE_ITEM_VALUE:
      return {
        ...state,
        items: changeItemValue(state.items, action.payload),
      }
    default:
      return state
  }
}

export default productReducer
