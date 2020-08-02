import Board from "../domain/board";
import {Column, Story} from "../domain/";

const initialState = {
  board: Board([
    Column('To-do'),
    Column('Progress'),
    Column('Done')
  ]).generateStories(8)
};

function rootReducer(state = initialState, action) {
  if (action.type === 'GENERATE_STORIES') {
    return {
      ...state,
      board: state.board.generateStories(parseInt(action.payload.numberOfStories))
    };
  }
  if (action.type === 'ADD_COLUMN') {
    return {
      ...state,
      board: state.board.addColumn(action.payload.name)
    };
  }
  if (action.type === 'DO_WORK') {
    return {
      ...state,
      board: state.board.doWork()
    };
  }
  return state;
}

export default rootReducer;
