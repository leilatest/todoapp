import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Js/action";

const Addtask = ({ handleFilter }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const AddNewTask = () => {
    if (task) {
      dispatch(addTask({ task: task, isDone: false, id: Math.random() }));
      setTask("");
    } else alert("please enter task");
  };
  return (
    <div className="header">
      <h1> ToDo Application </h1>
      <input
        type="text"
        placeholder=" new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <div>
      
          <button onClick={AddNewTask}> Add </button>
     
        <button onClick={handleFilter}> All </button>
      </div>
    </div>
  );
};

export default Addtask;
