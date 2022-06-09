import React from "react";
import styles from "./taskApp.module.css";
import {AddTask} from "./AddTask"
import {Tasks} from "./Tasks"
import { TaskHeader } from "./TaskHeader";
import {useState} from "react"
import { v4 } from "uuid";

const TaskApp = ({task}) => {
  const [tasks, setTasks] = useState(task);

  

  const handleAddition = (e) =>{
    if(e && !tasks.some((task)=> task.text===e)){
      const obj = {
        id: v4(),
        text: e,
        done: false,
        count : 1,
      };
      setTasks([...tasks, obj]);
    }
  }

  const handleUpdate = (updatedTask) => {
    let newTodo = tasks.reduce((acc, curr) => {
      if (curr.id === updatedTask.id) {
        acc.push(updatedTask);
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
    setTasks([...newTodo]);
  };
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader  tasks = {tasks}/>
      <AddTask handleAddTodo = {handleAddition}></AddTask>
      <Tasks tasks={tasks} handleChange={handleUpdate}></Tasks>
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
