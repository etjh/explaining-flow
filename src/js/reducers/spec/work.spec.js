import rootReducer from "../index";
import {Board, Column, Story} from "../../domain";
import {tick} from "../../actions";

describe('work', () => {
  it('should start one story', () => {
    let initialState = {
      board: Board([
        Column('todo', [Story()]),
        Column('wip'),
        Column('done')
      ])
    };
    const state = rootReducer(initialState, tick());

    expect(state.board.columns).toMatchObject([
      {name: 'todo', wip: 0, work: []},
      {name: 'wip', wip: 1, work: [{}]},
      {name: 'done', wip: 0, work: []}
    ])
  });
  it('should finish one story', () => {
    let initialState = {
      board: Board([
        Column('todo'),
        Column('wip', [Story()]),
        Column('done')
      ])
    };
    const state = rootReducer(initialState, tick());

    expect(state.board.columns).toMatchObject([
      {name: 'todo', wip: 0, work: []},
      {name: 'wip', wip: 0, work: []},
      {name: 'done', wip: 1, work: [{}]}
    ])
  });
});