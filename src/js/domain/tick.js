const tick = (state, payload) => {
  const worker = state.workers[0]
  const delta = payload.delta;

  const story = ([...state.columns].reverse().slice(1).flatMap(c => c.work))[0];

  if (story === undefined) return state

  let todoColumn = state.columns[0]
  let busyColumn = state.columns[1]
  let doneColumn = state.columns[2]

  function log(data) {
    // console.log(data)
  }

  log({story, todoColumn, busyColumn, doneColumn});

  // move the story out of the current column
  if (story['dev'].done === 0) {
    // take it out of dev
    todoColumn.work = todoColumn.work.slice(0, -1);
  } else {
    busyColumn.work = busyColumn.work.slice(0, -1);
  }
  log({story, todoColumn, busyColumn, doneColumn})

  // DO THE WORK
  let updatedStory = undefined
  let timeToSpend = delta

  do {
    let canDo = timeToSpend * worker['dev']
    let toDo = story['dev'].total - story['dev'].done
    log({canDo, toDo})
    if (toDo >= canDo) {
      updatedStory = {
        ...story,
        'dev': {
          ...story['dev'],
          done: story['dev'].done + canDo
        }
      };
      timeToSpend = 0;
    } else {
      updatedStory = {
        ...story,
        'dev': {
          ...story['dev'],
          done: story['dev'].total
        }
      };
      timeToSpend -= toDo
    }
  } while(timeToSpend > 0)



  // put the story in the right column
  let devWork = updatedStory['dev'];
  let storyDone = devWork.done >= devWork.total;
  log({devWork, storyDone})
  if (storyDone) {
    doneColumn.work.push(updatedStory)
  } else {
    busyColumn.work.push(updatedStory);
  }
  log({updatedStory, todoColumn, busyColumn, doneColumn})

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