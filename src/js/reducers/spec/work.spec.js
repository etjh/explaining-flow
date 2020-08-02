import rootReducer from "../index";
import {Board, Column, Story} from "../../domain";
import {doWork} from "../../actions";

describe('work', () => {
  it('should finish one story', () => {
    const {board} = rootReducer(
      {board: Board([
          Column('todo', [Story()]),
          Column('wip'),
          Column('done')
        ])},
      doWork()
    );

    expect(board.columns).toMatchObject([
      {name: 'todo', wip: 0, work: []},
      {name: 'wip', wip: 1, work: [{}]},
      {name: 'done', wip: 0, work: []}
    ])
  });
});