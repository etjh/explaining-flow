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

  function move(column, column2) {
    const story = column.work[0];
    return [column.take(), column2.add(story)];
  }

  const doWork = () => {
    const newCols = move(columns[0], columns[1])
    return Board([...newCols, ...columns.slice(2)])
  };

  return {
    generateStories,
    addColumn,
    doWork,

    columns,
  }
};

export default Board