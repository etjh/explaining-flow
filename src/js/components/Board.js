import React from "react";
import {connect} from "react-redux";

const Story = (story) => <li className={'dd-item'}>{story.id}</li>;

const maxStoriesToShow = 8
const ItemList = ({work}) => {
  if (work.length <= maxStoriesToShow) {
    return (
      <>{work.map(story => <Story key={story.id} story={story} />)}</>
    );
  } else {
    return (
      <>{[
        ...work.slice(0, maxStoriesToShow).map(Story),
        <li className={'dd-item more'}>...</li>
      ]}</>
    );

  }
};

const Column = ({column}) => {
  return (
    <ol className={`kanban ${column.name}`}>
      <div className={`kanban__title ${column.name}`}>
        <h2>{`${column.name} (${column.wip})`}</h2>
      </div>
      <ItemList work={column.work}/>
    </ol>
  );
}

const Board = ({columns}) =>
  (
    <div className={'dd'}>
      {columns.map(column =>
        (<Column key={column.name} column={column}/>))}
    </div>
  );

const stateToProps = state => ({columns: state.columns});

export default connect(stateToProps)(Board);
