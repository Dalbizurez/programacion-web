import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './Components/TaskList.jsx'
import TaskForm from './Components/TaskForm.jsx'

function App() {
  const [count, setCount] = useState(0)
  const test = [
    { id: 1, name: 'Task One', completed: true },
    { id: 2, name: 'Task Two', completed: false },
    { id: 3, name: 'Task Three', completed: true },
  ]
  const [tasks, setTasks] = useState(test);


  const addTask = (name) => {
    const newTask = {
      id: Date.now(),
      name,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  return <>
    <TaskForm onAdd={addTask} />
    <TaskList tasks={tasks} setTaskList={setTasks} />
  </> 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
