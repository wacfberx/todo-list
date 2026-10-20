function TodoList() {
  const todoList = [
    {id: 1, title: "review grocery list"},
    {id: 2, title: "go on a run"},
    {id: 3, title: "think of new project ideas"},
  ]

  return (
    <ul>
      {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  )
}

export default TodoList
