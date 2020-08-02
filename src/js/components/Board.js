import React from "react";
import {connect} from "react-redux";

const List = ({work}) => {
  return (
    <ol>
      {work.map(el => <li key={el.id}>{el.title}</li>)}
    </ol>
  );
};

const Column = ({column}) => {
  return (
    <>
      <li key={column.id}>{`${column.name} (${column.wip})`}</li>
      <List work={column.work}/>
    </>
  );
}

const Board = ({board}) =>
  (
    <ol>
      {board.columns.map(column => {
        return (<>
          <Column column={column}/>
        </>);
      })}
    </ol>
  );

const stateToProps = state => ({board: state.board});

export default connect(stateToProps)(Board);
