import { useState } from "react";

const AddTask = (props) => {
  const [newTask, setNewTask] = useState('');

  const { onClickAddTask } = props;

  const onClick = () => {
    onClickAddTask(newTask);

    setNewTask('');
  }

  return (
    <div>
      <input
        value={newTask}
        type="text"
        placeholder="Enter task name"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default AddTask;
