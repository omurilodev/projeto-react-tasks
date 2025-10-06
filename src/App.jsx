import React from 'react';
import './App.css';
import Tasks from './assets/components/Tasks';
import AddTask from './assets/components/AddTask';

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      title: 'Estudar React',
      description: 'Estudar React todos os dias as 19h',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Estudar Node',
      description: 'Estudar Node todos os dias as 20h',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Estudar JavaScript',
      description: 'Estudar JavaScript todos os dias as 21h',
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div
      className="w-screen h-screen 
    bg-slate-500 flex justify-center p-6"
    >
      <div className="w-[500px] ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
