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
  }

  const doWork = () => {
    if (columns[1].wip > 0) {
      const story = columns[1].work[0];
      return Board([columns[0], columns[1].take(), columns[2].add(story)])
    } else if(columns[0].wip > 0) {
      const story = columns[0].work[0];
      return Board([columns[0].take(), columns[1].add(story), columns[2]])
    }
    return Board([columns[0], columns[1], columns[2]])
  };

  return {
    generateStories,
    addColumn,
    doWork,

    columns,
  }
};

export default Board