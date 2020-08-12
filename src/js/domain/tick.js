const tick = (state, payload) => {
  const worker = state.workers[0]
  const delta = payload.delta;

  const story = ([...state.columns].reverse().slice(1).flatMap(c => c.work))[0];

  if (story === undefined) return state

  let todoColumn = state.columns[0]
  let busyColumn = state.columns[1]
  let doneColumn = state.columns[2]

  // console.log({story, todoColumn, busyColumn, doneColumn})

  if (story['dev'].done === 0) {
    // take it out of dev
    todoColumn.work = todoColumn.work.slice(0, -1);
  } else {
    busyColumn.work = busyColumn.work.slice(0, -1);
  }
  // console.log({story, todoColumn, busyColumn, doneColumn})

  let updatedStory = {
    ...story,
    'dev': {
      ...story['dev'],
      done: story['dev'].done + delta * worker['dev']
    }
  };

  let devWork = updatedStory['dev'];
  let storyDone = devWork.done >= devWork.total;
  // console.log({devWork, storyDone})
  if (storyDone) {
    doneColumn.work.push(updatedStory)
  } else {
    busyColumn.work.push(updatedStory);
  }
  // console.log({updatedStory, todoColumn, busyColumn, doneColumn})

  let work = state.work + delta;

  state.columns.forEach(c => c.wip = c.work.length)


  return {
    ...state,
    columns: [
      todoColumn,
      busyColumn,
      doneColumn
    ],
    work
  };
};

export default tick