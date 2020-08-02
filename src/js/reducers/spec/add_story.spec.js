import rootReducer from "../index";
import Board from "../../domain/board";
import {addProductIncrement} from "../../actions";

describe('adding a story', () => {
  it('should show in the todo column', function () {
    let {board} = rootReducer(
      {board: Board()},
      addProductIncrement({title: 'story 1'})
    );
    expect(board.stories).toMatchObject([{title: 'story 1'}])
  });
});