import tick from "../domain/tick";
import _ from "lodash";
import {addStory, createBoard, createWorkers} from "../actions";

const initialState = _.flow([
    s => rootReducer(s, createBoard(['dev'])),
    s => rootReducer(s, createWorkers([{'dev': 1}])),
    s => rootReducer(s, addStory({'dev': 1}))
  ])

const rootReducer = (state = initialState({}), action) => {
  console.log({state, action, type: action.type, running: state.running})

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
        {name: 'todo', wip: 1, work: [{id: 1}]},
        {name: 'dev', wip: 0, work: []},
        {name: 'done', wip: 0, work: []}
      ]
    };
  }

  if (action.type === 'START') {
    let newState = {
      ...state,
      timer: {
        running: true,
        previousTime: Date.now(),
        handle: setInterval(action.payload.tick, 100)
      }};
    console.log({newState})
    return newState
  }
  if (action.type === 'STOP') {
    let newState = {
      ...state,
      timer: {
        ...state.timer,
        running: false,
        handle: clearInterval(state.timer.handle)
      }
    };
    console.log({newState})
    return newState
  }
  if (action.type === 'TICK') {
    let newState = tick(state);
    console.log({newState})
    return newState
  }

  return state;
};

export default rootReducer;
