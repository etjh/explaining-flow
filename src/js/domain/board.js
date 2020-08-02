import {Column} from "./column";

const Board = (columns = [Column('to do')]) => {
  const todo = columns[0];
  const addStory = (title) => {
    return Board([todo.addStory(title)])
  };

  return {
    addStory,

    columns: [todo],
  }
};

export default Board