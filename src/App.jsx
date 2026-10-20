import { useState } from 'react'
import './App.css'
import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'

const todos = [
  {id: 1, title: "review grocery list"},
  {id: 2, title: "go on a run"},
  {id: 3, title: "think of new project ideas"},
]

function App() {
  const [todoList, setTodoList] = useState(todos)

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App
