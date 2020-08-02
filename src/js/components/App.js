import React from "react";
import Board from "./Board";
import GenerateStories from "./GenerateStories";
import AddColumn from "./AddColumn";
import './App.css'

const App = () => (
  <>
    <span>
      <h2>Generate stories</h2>
      <GenerateStories/>
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
