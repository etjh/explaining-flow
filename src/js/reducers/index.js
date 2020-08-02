import Board from "../domain/board";

const initialState = {
  board: Board().addStory('one').addStory('two')
};

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_PRODUCT_INCREMENT') {
    return {
      ...state,
      board: state.board.addStory(action.payload.title)
    };
  }
  return state;
}

export default rootReducer;
