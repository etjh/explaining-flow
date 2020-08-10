import tick from "../domain/tick";
import _ from "lodash";
import {addStory, createBoard, createWorkers} from "../actions";

const initialState = _.flow([
    s => rootReducer(s, createBoard(['dev'])),
    s => rootReducer(s, createWorkers([{'dev': 1000}])),
    s => rootReducer(s, addStory({'dev': 1000}))
  ])

const rootReducer = (state = initialState({}), action) => {
  if (action.type === 'CREATE_BOARD') {
    return {
      ...state,
      columns: [
        {name: 'todo', wip: 0, work: []},
        {name: 'dev', wip: 0, work: []},
        {name: 'done', wip: 0, work: []}
      ],
      work: 0
    }
  }
  if (action.type === 'CREATE_WORKERS') {
    return {
      ...state,
      workers: [{}]
    }
  }

  if (action.type === 'ADD_STORY') {
    return {
      ...state,
      columns: [
        {name: 'todo', wip: 1, work: [{id: 1, 'dev': {total: 1000, done: 0}}]},
        {name: 'dev', wip: 0, work: []},
        {name: 'done', wip: 0, work: []}
      ]
    };
  }

  if (action.type === 'START') {
    return {
      ...state,
      timer: {
        running: true,
        handle: action.payload.timer.start()
      }
    }
  }
  if (action.type === 'STOP') {
    return {
      ...state,
      timer: {
        ...state.timer,
        running: false,
        handle: clearInterval(state.timer.handle)
      }
    }
  }
  if (action.type === 'TICK') {
    return tick(state, action.payload)
  }

  return state;
};

export default rootReducer;
