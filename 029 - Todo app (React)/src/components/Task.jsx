import React from "react";

const Task = (props) => {
    const {task, onClickDeleteTask} = props;

  return (
    <div className="task">
      <div>{task.name}</div>
      <button onClick={(e) => onClickDeleteTask(e.target.id)} id={task.id}>
        X
      </button>
    </div>
  );
};

export default Task;
