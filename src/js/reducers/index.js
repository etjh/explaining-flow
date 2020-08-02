import Board from "../domain/board";
import Column from "../domain/column";
import Story from "../domain/story";

const initialState = {
  board: Board([
    Column('to do', [Story('one'), Story('two')]),
    Column('doing', []),
    Column('done', [])
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
