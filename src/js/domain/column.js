import Story from "./story";

const Column = (name, work = []) => {
  const generateStories = (numberOfStories) => {
    const newItems = Array.apply(null, Array(numberOfStories)).map(Story);
    return Column(name, [
      ...newItems
    ])
  };

  return {
    generateStories,
    take: () => Column(name, work.slice(1)),
    add: item => Column(name, [...work, item]),

    name,
    work,
    wip: work.length
  };
};

export default Column