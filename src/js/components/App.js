import React from "react";
import Board from "./Board";
import AddStory from "./AddStory";
import AddColumn from "./AddColumn";
import './App.css'

const App = () => (
  <>
    <span>
      <h2>Add Story</h2>
      <AddStory/>
    </span>
    <span>
      <h2>Add Column</h2>
      <AddColumn/>
    </span>
    <div>
      <h2>Board</h2>
      <Board/>
    </div>
  </>
);

export default App;
