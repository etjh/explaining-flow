export const createBoard = payload => ({type: 'CREATE_BOARD', payload})
export const createWorkers = payload => ({type: 'CREATE_WORKERS', payload})
export const addStory = payload => ({type: 'ADD_STORY', payload})

export const start = timer => ({type: 'START', payload: {timer}})
export const tick = delta => ({type: 'TICK', payload: {delta}})
export const stop = payload => ({type: 'STOP', payload})
