import React from 'react'
import './App.css'
import Tasks from './assets/components/Tasks'
import AddTask from './assets/components/AddTask'

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Tasks />
      <AddTask  />
    </div>
  )
}

export default App
