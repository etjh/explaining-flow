import React from "react";
import {connect} from "react-redux";

const List = ({column}) => {
  console.log(column)
  console.log(column.work)
  return (
    <ul>
      {column.work.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
};

const stateToProps = state => {
  console.log(state)
  return {column: state.board.columns[0]};
};

export default connect(stateToProps)(List);
