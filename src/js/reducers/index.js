const initialState = {
  items: []
};

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_PRODUCT_INCREMENT') {
    return {
      ...state,
      items: state.items.concat({ id: state.items.length, title: action.payload.title})
    };
  }
  return state;
}

export default rootReducer;
