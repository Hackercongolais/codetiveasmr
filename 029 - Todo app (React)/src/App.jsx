import AddTask from "./components/AddTask";
import Task from './components/Task';
import { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const onClickAddTask = (newTask) => {
    const task = {
      name: newTask,
      id: crypto.randomUUID(),
    };

    setTasks([...tasks, task]);
  };

  const onClickDeleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id;
    }))
  };

  return (
    <div>
      <AddTask onClickAddTask={onClickAddTask} />
      <div className="tasks">
        {tasks.length === 0 ? (
          <div>No tasks yet.</div>
        ) : (
          tasks.map((task) => {
            return (
              <Task task={task} onClickDeleteTask={onClickDeleteTask} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
