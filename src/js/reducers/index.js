import Board from "../domain/board";
import {Column, Story} from "../domain/";

const initialState = {
  board: Board([
    Column('To-do', [Story('one'), Story('two')]),
    Column('Progress', []),
    Column('Done', [])
  ])
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
