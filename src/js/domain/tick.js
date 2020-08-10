const tick = (state, payload) => {
  const delta = payload.delta;

  let work = state.work + delta;

  if (work < 1000) {
    const story = state.columns.find(c => c.work.length > 0).work[0];

    return {
      ...state,
      columns: [
        {name: 'todo', wip: 0, work: []},
        {name: 'dev', wip: 1, work: [{...story, 'dev': {...story['dev'], done: story['dev'].done + delta}}]},
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
        {name: 'done', wip: 1, work: [{id: 1, 'dev': {total: 1000, done: 1000}}]}
      ],
      work
    };

  }
};

export default tick