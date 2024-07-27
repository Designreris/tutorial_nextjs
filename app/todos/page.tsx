import AddTodo from "../components/AddTodo"
import TodoList from "../components/TodoList"

// no-cache //
export const revalidate = 0

export default function Todos() {
  return (
    <main>
      {/* Top-bar */}
      <div className="flex justify-center align-middle bg-slate-600">
        <h1 className="inset-0 text-xl">Todos Page</h1>
      </div>

      {/* Todos Page */}
      <div className="p-10 bg-slate-700">
        <AddTodo />
        <TodoList />
      </div>
    </main>
  )
}
