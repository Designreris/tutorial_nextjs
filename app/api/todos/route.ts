import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY: string = process.env.DATA_API_KEY as string

// Create //
export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json()

  if (!userId || !title)
    return Response.json({ message: "Missing required data." })

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  })

  const newTodo: Todo = await res.json()

  return Response.json(newTodo)
}

// Read //
export async function GET(request: Request) {
  const origin = request.headers.get("origin")
  const res = await fetch(DATA_SOURCE_URL)

  const todo: Todo[] = await res.json()

  return new NextResponse(JSON.stringify(todo), {
    headers: {
      "Access-Control-Allow-Origin": (origin as string) || "*",
      "Content-Type": "application/json",
    },
  })
}

// Update //
export async function PUT(request: Request) {
  const { userId, id, title, completed }: Todo = await request.json()

  if (!userId || !id || !title || typeof completed !== "boolean")
    return Response.json({ message: "Update data required!" })

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  })

  const updateTodo: Todo = await res.json()

  return Response.json(updateTodo)
}

// Delete //
export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json()

  if (!id) return Response.json({ message: "Todo id required!" })

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  })
  return Response.json({ message: `Todo ${id} deleted` })
}
