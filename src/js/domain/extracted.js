const log = data => {
  //console.log(data)
};

const takeStoryFromBoard = (story, todoColumn, busyColumn) => {
  if (story['dev'].done === 0) {
    // take it out of dev
    todoColumn.work = todoColumn.work.slice(0, -1);
  } else {
    busyColumn.work = busyColumn.work.slice(0, -1);
  }
};

const doWork = (story, worker, timeToSpend) => {
  let canDo = timeToSpend * worker['dev']
  let toDo = story['dev'].total - story['dev'].done
  log({canDo, toDo})
  if (toDo >= canDo) {
    return [{
      ...story,
      'dev': {
        ...story['dev'],
        done: story['dev'].done + canDo
      }
    },
      0];
  } else {
    return [{
      ...story,
      'dev': {
        ...story['dev'],
        done: story['dev'].total
      }
    },
      timeToSpend - toDo]
  }
};

const calculateWip = (columns) => {
  columns.forEach(c => c.wip = c.work.length)
};

function moveStoryToRightColumn(story, busyColumn, doneColumn) {
  let devWork = story['dev'];
  let storyDone = devWork.done >= devWork.total;
  log({devWork, storyDone})
  if (storyDone) {
    doneColumn.work.push(story)
  } else {
    busyColumn.work.push(story);
  }
}

const tick = (state, payload) => {

  const worker = state.workers[0]
  const delta = payload.delta;

  let todoColumn = state.columns[0]
  let busyColumn = state.columns[1]
  let doneColumn = state.columns[2]

  let updatedStory = undefined
  let timeToSpend = delta
  do {
    const story = ([...state.columns].reverse().slice(1).flatMap(c => c.work))[0];
    if (story === undefined) return state
    takeStoryFromBoard(story, todoColumn, busyColumn);
    log({story, todoColumn, busyColumn, doneColumn});

    [updatedStory, timeToSpend] = doWork(story, worker, timeToSpend);
    moveStoryToRightColumn(updatedStory, busyColumn, doneColumn);
  } while (timeToSpend > 0)


  // put the story in the right column
  log({updatedStory, todoColumn, busyColumn, doneColumn})

  calculateWip(state.columns);


  return {
    ...state,
    columns: [
      todoColumn,
      busyColumn,
      doneColumn
    ]
  };
};

export default tick