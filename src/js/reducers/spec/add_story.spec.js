import rootReducer from "../index";
import Board from "../../domain/board";
import {addStory} from "../../actions";

describe('adding a story', () => {
  it('should show in the todo column', function () {
    const {board} = rootReducer(
      {board: Board()},
      addStory({title: 'story 1'})
    );
    expect(board.columns).toMatchObject([
      {name: 'to do', work: [{title: 'story 1'}]}
    ])
  });
});