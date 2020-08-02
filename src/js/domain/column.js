import Story from "./story";

const Column = (name, work = []) => {
  const addStory = (storyTitle) => {
    return Column(name, [...work, Story(storyTitle)])
  };

  return {
    addStory,

    name,
    work,
    wip: work.length
  };
};

export default Column