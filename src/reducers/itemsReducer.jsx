export default function itemsReducer(
  state={ activeItem: 'reports' }, action) {

  switch (action.type) {
    case "SELECT_ITEM": {
      return {
        ...state, 
        activeItem: action.payload
      }
      break;
    }
  }
  return state
}