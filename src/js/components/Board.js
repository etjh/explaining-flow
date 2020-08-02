import React from "react";
import {connect} from "react-redux";

const Story = (story) => <li className={'dd-item'} key={story.id}>{story.id}</li>;

const maxStoriesToShow = 8
const List = ({work}) => {
  if (work.length <= maxStoriesToShow) {
    return (
      <>{work.map(Story)}</>
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
      <List work={column.work}/>
    </ol>
  );
}

const Board = ({board}) =>
  (
    <div className={'dd'}>
      {board.columns.map(column => {
        return (<>
          <Column column={column}/>
        </>);
      })}
    </div>
  );

const stateToProps = state => ({board: state.board});

export default connect(stateToProps)(Board);
