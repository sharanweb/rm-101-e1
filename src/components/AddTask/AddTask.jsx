import React from "react";
import styles from "./addTask.module.css";
import {useState, useEffect} from "react"

const AddTask = (handleAddTodo) => {

  const [todo, setTodo] = useState(" ");

  const handleSubmit = ()=>{
    handleAddTodo(todo);
    setTodo("");
  }


  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" value={todo} type="text" onChange={(e)=> setTodo(e.target.value) } placeholder="add todoy"/>
      <button data-testid="add-task-button" onClick={handleSubmit}></button>
    </div>
  );
};

export default AddTask;
