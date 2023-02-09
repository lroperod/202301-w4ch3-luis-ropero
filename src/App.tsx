import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TaskCreator from "./components/TaskCreator/TaskCreator";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  return (
    <div className="App">
      <Header></Header>
      <TaskCreator functionOnSubmit={(value) => setCurrentValue(value)} />
      <p>{currentValue}</p>
    </div>
  );
}

export default App;
