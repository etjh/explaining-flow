import Story from "./story";

const Board = (stories = []) => {
  const todo = {name: 'to do', work: stories}
  const addStory = (data) => {
    return Board([...stories, Story(data)])
  };

  return {
    addStory,

    columns: [todo],
    stories: [...stories]
  }
};

export default Board