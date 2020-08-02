import rootReducer from "../index";
import {generateStories} from "../../actions";
import {Board, Column} from "../../domain/";

describe('adding a story', () => {
  it('should show in the todo column', function () {
    const {board} = rootReducer(
      {board: Board([Column('to do')])},
      generateStories({numberOfStories: '3'})
    );
    expect(board.columns).toMatchObject([
      {name: 'to do', wip: 3, work: [{}, {}, {}]}
    ])
  });
});