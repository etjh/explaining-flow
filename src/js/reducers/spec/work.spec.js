import rootReducer from "../index";
import _ from 'lodash'
import {addStory, createBoard, createWorkers, tick} from "../../actions";
import { advanceBy } from 'jest-date-mock';

describe('work', () => {
  let initialState = undefined;

  beforeEach(() => {
    initialState = _.flow([
      s => rootReducer(s, createBoard(['dev'])),
      s => rootReducer(s, createWorkers([{'dev': 1}])),
      s => rootReducer(s, addStory({'dev': 1}))
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
    advanceBy(100);
    const state = rootReducer(initialState, tick())
    expect(state.columns).toMatchObject([
      {wip: 0, work: []},
      {wip: 1, work: [{}]},
      {wip: 0, work: []}
    ])
    expect(state).toMatchObject({running: true})
  });

  it('end the simulation', () => {
    advanceBy(1000);
    const state = rootReducer(initialState, tick())
    expect(state.columns).toMatchObject([
      {wip: 0, work: []},
      {wip: 0, work: []},
      {wip: 1, work: [{}]}
    ])
    expect(state).toMatchObject({running: false})
  });
});