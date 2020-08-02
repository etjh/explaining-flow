import React from "react";
import Board from "./Board";
import AddStory from "../actions/AddStory";
import AddColumn from "../actions/AddColumn";
import './App.css'

const App = () => (
  <>
    <div>
      <h1>Board</h1>
      <div className={"dd"}>
        <Board/>
      </div>
    </div>
    <div>
      <h2>Add Story</h2>
      <AddStory/>
    </div>
    <div>
      <h2>Add Column</h2>
      <AddColumn/>
    </div>
  </>
);

export default App;
