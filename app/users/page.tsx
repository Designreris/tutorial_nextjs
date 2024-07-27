import { Metadata } from "next"
import Link from "next/link"
import getAllUsers from "@/lib/getAllUsers"

export const metadata: Metadata = {
  title: "Users Page",
  description: "Generated by create next app",
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData

  // console.log("Hello")

  const content = (
    <section>
      <div className="flex justify-center align-middle bg-slate-600">
        <h1 className="inset-0 text-xl">Blog Page</h1>
      </div>
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        )
      })}
    </section>
  )

  return content
}