import React from "react";

import styles from "./taskApp.module.css";
import {AddTask} from "./AddTask"
import {Tasks} from "./Tasks"
import { TaskHeader } from "./TaskHeader";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      <AddTask></AddTask>
      <Tasks></Tasks>
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
