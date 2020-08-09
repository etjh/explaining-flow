import React from "react";
import Board from "./Board";
import Work from "./Work";
import './App.css'

const App = () => (
  <>
    <span>
      <h2>Work</h2>
      <Work/>
    </span>
    <div>
      <h2>Board</h2>
      <Board/>
    </div>
  </>
);

export default App;
