import rootReducer from "../index";
import {generateStories} from "../../actions";
import {Board, Column} from "../../domain/";

describe('generate stories', () => {
  it('should show in the todo column', () => {
    const {board} = rootReducer(
      {board: Board([Column('to do')])},
      generateStories({numberOfStories: '3'})
    );
    expect(board.columns).toMatchObject([
      {name: 'to do', wip: 3, work: [{}, {}, {}]}
    ])
  });
});