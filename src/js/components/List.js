import React from "react";
import {connect} from "react-redux";

const List = ({stories}) => (
  <ul>
    {stories.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const stateToProps = state => {
  return {stories: state.board.stories};
};

export default connect(stateToProps)(List);
