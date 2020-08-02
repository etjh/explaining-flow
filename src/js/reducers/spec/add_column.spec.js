import rootReducer from "../index";
import {Board} from "../../domain/";
import {addColumn} from "../../actions";

describe('adding a column', () => {
  it('should show the new column', function () {
    const {board} = rootReducer(
      {board: Board([])},
      addColumn({name: 'column 1'})
    );
    expect(board.columns).toMatchObject([
      {name: 'column 1', work: [], wip: 0}
    ])
  });
});