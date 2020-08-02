import Board from "../domain/board";
import Column from "../domain/column";

let board = Board([Column('to do')]);
let board1 = board.addStory('one');
let board2 = board1.addStory('two');
const initialState = {
  board: board2
};

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_PRODUCT_INCREMENT') {
    return {
      ...state,
      board: state.board.addStory(action.payload.title)
    };
  }
  if (action.type === 'ADD_COLUMN') {
    return {
      ...state,
      board: state.board.addColumn(action.payload.name)
    };
  }
  return state;
}

export default rootReducer;
