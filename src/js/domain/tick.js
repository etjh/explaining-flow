const doWork = (board, delta) => {
  return board.doWork()
};

const tick = (state) => {
  const now = Date.now()
  const delta = now - state.lastUpdate;

  return {
    ...state,
    board: doWork(state.board, delta),
    lastUpdate: now
  }
};

export default tick