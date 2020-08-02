import React from "react";
import List from "./List";
import Form from "./Form";
import Board from "./Board";

const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <Board/>
      <List/>
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form/>
    </div>
  </>
);

export default App;
