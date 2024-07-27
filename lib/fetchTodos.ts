export default async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/")

  const todos: Todo[] = await res.json()

  return todos
}
