import Board from "../domain/board";
import Story from "../domain/story";

const initialState = {
  board: Board([Story('one'), Story('two')])
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
