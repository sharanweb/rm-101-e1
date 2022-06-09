import React from "react";
import styles from "./addTask.module.css";
import {useState} from "react"

const AddTask = ({handleAddTodo}) => {

  const [todos, setTodos] = useState("");

  const handleSubmit = ()=>{
    handleAddTodo(todos);
    setTodos("");
  }


  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" value={todos} type="text" onChange={(e)=> setTodos(e.target.value) } placeholder="add todoy"/>
      <button data-testid="add-task-button" onClick={handleSubmit}>Add todo</button>
    </div>
  );
};

export default AddTask;
