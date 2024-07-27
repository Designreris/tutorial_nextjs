import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import UserPosts from "./components/UserPosts"
import { Suspense } from "react"
import type { Metadata } from "next"

type Params = {
  params: {
    userId: string
  }
}

// Dynamic Metadata //
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId) // auto dedupe
  const user: User = await userData

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  }
}

// fetch in parallel //
// export default async function UserPage({ params: { userId } }: Params) {
//   const userData: Promise<User> = getUser(userId)
//   const userPostsData: Promise<Post[]> = getUserPosts(userId)

//   const [user, userPosts] = await Promise.all([userData, userPostsData])

//   return (
//     <>
//       <h2>{user.name}</h2>
//       <br />
//       <UserPosts posts={userPosts} />
//     </>
//   )
// }

// fetch in parallel with Suspense //
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)

  const user = await userData

  return (
    <>
      <div className="flex justify-center align-middle bg-slate-600">
        <h2 className="inset-0 text-xl">{user.name}</h2>
      </div>
      <br />
      <Suspense fallback={<h2>Loading ...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  )
}
