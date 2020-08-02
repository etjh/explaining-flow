import Column from "./column";

const Board = (columns = []) => {
  const [todo, ...otherColumns] = columns
  const generateStories = (numberOfStories) => {
    return Board([
      todo.generateStories(numberOfStories),
      ...otherColumns
    ]);
  };
  const addColumn = (name) => Board([...columns, Column(name)]);

  return {
    generateStories,
    addColumn,

    columns,
  }
};

export default Board