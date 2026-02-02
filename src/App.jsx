import React, { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleNewTask = (event) => {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: inputValue,
        isCompleted: false,
      },
    ]);

    setInputValue("");
  };

  const handleDeleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.id != taskId));

  const tasksUpdate = () => setTasks([...tasks]);

  return (
    <main className="container">
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          className="tasks__input"
          placeholder="Sua tarefa"
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />

        <button type="submit" className="tasks__button">
          Criar
        </button>
      </form>

      <Task
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        tasksUpdate={tasksUpdate}
      />
    </main>
  );
}

export default App;
