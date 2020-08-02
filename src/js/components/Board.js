import React from "react";
import {connect} from "react-redux";

const Column = ({column}) => <li key={column.id}>{`${column.name} (${column.wip})`}</li>

const Board = ({board}) =>
  (
    <ul>
      {board.columns.map(column => <Column column={column}/>)}
    </ul>
  );

const stateToProps = state => ({board: state.board});

export default connect(stateToProps)(Board);
