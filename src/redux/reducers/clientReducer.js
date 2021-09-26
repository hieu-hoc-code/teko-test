import { FETCH_POSTS, NEW_POST } from '../actions/types'

const initialState = {
  items: [],
  item: 'dau quan re',
}

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      }
    default:
      return state
  }
}

export default clientReducer
