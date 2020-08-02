import Column from "./column";

const Board = (columns = []) => {
  const [todo, ...otherColumns] = columns
  const addStory = (title) => {
    let newStory = todo.addStory(title);
    let newColumns = [newStory, ...otherColumns];
    let newBoard = Board(newColumns);
    return newBoard;
  };
  const addColumn = (name) => Board([...columns, Column(name)]);

  return {
    addStory,
    addColumn,

    columns,
  }
};

export default Board