const tick = (state, payload) => {
  const now = Date.now()
  const delta = now - state.lastUpdate;

  if (delta > 999) {
    return {
      ...state,
      columns: [
        {name: 'todo', wip: 0, work: []},
        {name: 'dev', wip: 0, work: []},
        {name: 'done', wip: 1, work: [{}]}
      ],
      running: false
    };

  }
  return {
    ...state,
    columns: [
      {name: 'todo', wip: 0, work: []},
      {name: 'dev', wip: 1, work: [{}]},
      {name: 'done', wip: 0, work: []}
    ],
    running: true
  };
};

export default tick