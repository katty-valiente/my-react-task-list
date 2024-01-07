import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    { name: "Tarea 1", completed: false },
    { name: "Tarea 2", completed: true },
    { name: "Tarea 3", completed: false },
  ]);

  const addTask = () => {
    setTasks([...tasks, { name: "Nueva tarea", completed: false }]);
  };

  const handleCompleteTask = (task) => {
    task.completed = !task.completed;
    setTasks([...tasks.filter((t) => t.id !== task.id), task]);
  };

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;