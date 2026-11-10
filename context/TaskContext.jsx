
import { createContext, useContext, useState } from 'react';

// CREATE TASK CONTEXT
// Dito natin ise-share ang task data sa buong application.
const TaskContext = createContext();

// TASK PROVIDER
export function TaskProvider({ children }) {

  // SHARED TASK STATE
  const [tasks, setTasks] = useState([]);

  // ADD TASK
  const addTask = (newTask) => {
    setTasks((previousTasks) => [
      ...previousTasks,
      {
        ...newTask,
        completed: false,
      },
    ]);
  };

  // UPDATE TASK
  const updateTask = (updatedTask) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );
  };

  // COMPLETE / PENDING TASK
  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  // SHARE TASK FUNCTIONS AND DATA
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

// CUSTOM HOOK
// Gagamitin ito ng screens para makuha ang shared task data.
export function useTasks() {
  return useContext(TaskContext);
}
