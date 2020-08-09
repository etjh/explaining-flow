import rootReducer from "../index";
import _ from 'lodash'
import {addStory, createBoard, createWorkers, tick} from "../../actions";

describe('work', () => {
  let initialState = undefined;

  beforeEach(() => {
      initialState = _.flow([
        s => rootReducer(s, createBoard(['dev'])),
        s => rootReducer(s, createWorkers([{'dev': 1}])),
        s => rootReducer(s, addStory({'dev': 1000}))
      ])({})
  });

  it('sets the initial state', () => {
    expect(initialState.columns).toMatchObject([
      {name: 'todo', wip: 1, work: [{}]},
      {name: 'dev' , wip: 0, work: []},
      {name: 'done', wip: 0, work: []}
    ])
  });

  it('start the simulation', () => {
    const state = rootReducer(initialState, tick(0))
    expect(state.columns).toMatchObject([
      {wip: 0, work: []},
      {wip: 1, work: [{}]},
      {wip: 0, work: []}
    ])
  });

  it('almost done', () => {
    const state = rootReducer(initialState, tick(999))
    expect(state.columns).toMatchObject([
      {wip: 0, work: []},
      {wip: 1, work: [{}]},
      {wip: 0, work: []}
    ])
  });

  it('end the simulation', () => {
    const state = rootReducer(initialState, tick(1000))
    expect(state.columns).toMatchObject([
      {wip: 0, work: []},
      {wip: 0, work: []},
      {wip: 1, work: [{}]}
    ])
  });
});