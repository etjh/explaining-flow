import tick from "../domain/tick";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'CREATE_BOARD') {
    return {
      ...state,
      columns: [
        {name: 'todo', wip: 0, work: []},
        {name: 'dev', wip: 0, work: []},
        {name: 'done', wip: 0, work: []}
      ],
      lastUpdate: Date.now()
    }
  }
  if (action.type === 'CREATE_WORKERS') {
    return {
      ...state
    }
  }
  if (action.type === 'ADD_STORY') {
    return {
      ...state,
      columns: [
        {name: 'todo', wip: 1, work: [{}]},
        {name: 'dev', wip: 0, work: []},
        {name: 'done', wip: 0, work: []}
      ]
    }
  }
  if (action.type === 'TICK') {
    return tick(state, action.payload)
  }
  return state;
};

export default rootReducer;
