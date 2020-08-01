import Board from "../domain/board";

const initialState = {
  board: Board([{title: 'one'}, {title: 'two'}])
};

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_PRODUCT_INCREMENT') {
    return {
      ...state,
      board: state.board.addStory(action.payload)
    };
  }
  return state;
}

export default rootReducer;
