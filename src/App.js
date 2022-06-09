import React from "react";
import task from "./data/tasks.json"
import TaskApp from "./components/TaskApp";
function App() {
  return <div>{/* Code Here */}
  <TaskApp task={task}></TaskApp>
  </div>;
}

export default App;
