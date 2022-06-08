import React from "react";
import styles from "./tasks.module.css";
import {Task} from "../Task"

const Tasks = ({tasks, handleChange}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
    {
      tasks.length>0 ? (
        <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {
          tasks.map((el)=>{

            return (
              <Task key={el.id} task={el} handleFunction={handleChange} ></Task>

            )
            
          })
        }
      </ul>

      ):(
        <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <h3>you have no todos </h3>
      </div>

      )
    }
      
      
    </>
  );
};

export default Tasks;
