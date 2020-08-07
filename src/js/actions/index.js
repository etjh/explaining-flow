export const generateStories = payload => ({type: "GENERATE_STORIES", payload});
export const addColumn = payload => ({type: "ADD_COLUMN", payload});
export const tick = delta => ({type: 'TICK', payload: { delta }})

export const createBoard = payload => ({type: 'CREATE_BOARD', payload})
export const createWorkers = payload => ({type: 'CREATE_WORKERS', payload})
export const addStory = payload => ({type: 'ADD_STORY', payload})
