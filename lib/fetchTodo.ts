export default async function fetchTodo(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

  if (!res.ok) return undefined

  const todo: Todo = await res.json()

  return todo
}
