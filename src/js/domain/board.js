const Board = (stories = []) => {
  const addStory = ({title}) => {
    return Board([...stories, {id: 1, title}])
  };

  return {
    addStory,

    stories: [...stories]
  }
};

export default Board