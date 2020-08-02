import React from "react";
import List from "./List";
import Board from "./Board";
import AddStory from "./AddStory";
import AddColumn from "./AddColumn";

const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <Board/>
      <List/>
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
