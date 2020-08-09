const tick = (state, payload) => {
  const delta = payload.delta;

  let work = state.work + delta;

  if (work < 1000) {
    return {
      ...state,
      columns: [
        {name: 'todo', wip: 0, work: []},
        {name: 'dev', wip: 1, work: [{id: 1}]},
        {name: 'done', wip: 0, work: []}
      ],
      work
    };
  } else {
    return {
      ...state,
      columns: [
        {name: 'todo', wip: 0, work: []},
        {name: 'dev', wip: 0, work: []},
        {name: 'done', wip: 1, work: [{id: 1}]}
      ],
      work
    };

  }
};

export default tick