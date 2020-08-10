import rootReducer from "../index";
import _ from 'lodash'
import {addStory, createBoard, createWorkers, tick} from "../../actions";

describe('simple board with one worker', () => {
  let initialState = undefined;

  beforeEach(() => {
      initialState = _.flow([
        state => rootReducer(state, createBoard(['dev'])),
        state => rootReducer(state, createWorkers([{'dev': 1000}])),
        state => rootReducer(state, addStory({'dev': 1000}))
      ])({})
  });

  it('sets the initial state', () => {
    expect(initialState.columns).toMatchObject([
      {name: 'todo', wip: 1, work: [{'dev': {total: 1000, done: 0}}]},
      {name: 'dev' , wip: 0, work: []},
      {name: 'done', wip: 0, work: []}
    ])
  });

  it('start the simulation', () => {
    const state = rootReducer(initialState, tick(0))
    expect(state.columns).toMatchObject([
      {wip: 0, work: []},
      {wip: 1, work: [{'dev': {total: 1000, done: 0}}]},
      {wip: 0, work: []}
    ])
  });

  it('almost done', () => {
    const state = rootReducer(initialState, tick(999))
    expect(state.columns).toMatchObject([
      {wip: 0, work: []},
      {wip: 1, work: [{id: 1, 'dev': {total: 1000, done: 999}}]},
      {wip: 0, work: []}
    ])
  });

  it('end the simulation', () => {
    const state = rootReducer(initialState, tick(1000))
    expect(state.columns).toMatchObject([
      {wip: 0, work: []},
      {wip: 0, work: []},
      {wip: 1, work: [{id: 1, 'dev': {total: 1000, done: 1000}}]}
    ])
  });
});