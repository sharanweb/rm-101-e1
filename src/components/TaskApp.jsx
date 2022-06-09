import React from "react";
import styles from "./taskApp.module.css";
import {AddTask} from "./AddTask"
import {Tasks} from "./Tasks"
import { TaskHeader } from "./TaskHeader";
import {useState} from "react"
import { v4 } from "uuid";

const TaskApp = ({task}) => {
  const [tasks, setTasks] = useState(task);

  const handleChange = (e)=>{
    let val = tasks.reduce((acc, curr) => {
      if(curr.id === e.id){
        acc.push(e);
      }else{
        acc.push(curr);
      }
    },[]);
    setTasks([...val])
  }

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
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader  tasks = {tasks}/>
      <AddTask handleAddTodo = {handleAddition}></AddTask>
      <Tasks tasks={tasks} handleChange={handleChange}></Tasks>
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
