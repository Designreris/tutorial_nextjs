import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <h1>The requested post does not exist.</h1>
      <Link href="/posts">Back to posts.</Link>
    </>
  )
}
