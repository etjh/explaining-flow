import Story from "./story";

const Column = (name, work = []) => {
  const addStory = (storyTitle) => {
    return Column(name, [...work, Story(storyTitle)])
  };

  return {
    addStory,

    name,
    work
  };
};

export default Column