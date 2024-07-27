import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested todo</p>
      <Link href={"/todos"}>Back to Todos</Link>
    </>
  )
}
