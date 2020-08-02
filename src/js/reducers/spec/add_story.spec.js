import rootReducer from "../index";
import {addStory} from "../../actions";
import {Board, Column} from "../../domain/";

describe('adding a story', () => {
  it('should show in the todo column', function () {
    const {board} = rootReducer(
      {board: Board([Column('to do')])},
      addStory({title: 'story 1'})
    );
    expect(board.columns).toMatchObject([
      {name: 'to do', work: [{title: 'story 1'}]}
    ])
  });
});