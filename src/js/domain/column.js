import Story from "./story";

export function Column(name, work = []) {
  const addStory = (storyTitle) => {
    return Column(name, [...work, Story(storyTitle)])
  };

  return {
    addStory,

    name,
    work
  };
}