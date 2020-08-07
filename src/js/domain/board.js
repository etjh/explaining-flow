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

  const doWork = () => {
    if (columns[1].wip > 0) {
      let [secondColumn, story] = columns[1].take();
      return Board([columns[0], secondColumn, columns[2].add(story)])
    } else if(columns[0].wip > 0) {
      let [firstColumn, story] = columns[0].take();
      return Board([firstColumn, columns[1].add(story), columns[2]])
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