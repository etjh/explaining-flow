export const generateStories = payload => ({type: "GENERATE_STORIES", payload});
export const addColumn = payload => ({type: "ADD_COLUMN", payload});
export const start = payload => ({type: 'START', payload})
export const tick = payload => ({type: 'TICK', payload})
export const stop = payload => ({type: 'STOP', payload})

export const createBoard = payload => ({type: 'CREATE_BOARD', payload})
export const createWorkers = payload => ({type: 'CREATE_WORKERS', payload})
export const addStory = payload => ({type: 'ADD_STORY', payload})
