import Board from "../domain/board";
import {Column} from "../domain/";
import tick from "../domain/tick";

const initialState = {
  lastUpdate: Date.now(),
  board: Board([
    Column('To-do'),
    Column('Progress'),
    Column('Done')
  ]).generateStories(8)
};

const rootReducer = (state = initialState, action) => {
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
  if (action.type === 'TICK') {
    return tick(state)
  }
  return state;
};

export default rootReducer;
