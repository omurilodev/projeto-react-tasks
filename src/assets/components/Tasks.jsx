import { ChevronRight, Trash2 } from 'lucide-react';
import React from 'react';

const Tasks = (props) => {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left cursor-pointer ${
              task.isCompleted && 'line-through'
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white cursor-pointer">
            <ChevronRight />
          </button>
          <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white cursor-pointer">
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
