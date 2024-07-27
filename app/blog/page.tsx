import BlogProfile from "../components/BlogProfile"
import Posts from "../components/Posts"
import SocialIcons from "../components/SocialIcons"

export const revalidate = 10

export default function BlogPage() {
  return (
    <main>
      {/* Top-bar */}
      <div className="flex justify-center align-middle bg-slate-600">
        <h1 className="inset-0 text-xl">Blog Page</h1>
      </div>

      {/* Profile */}
      <div className="text-white/90 font-bold text-center bg-slate-800 p-2">
        <h2 className="text-xl">Dave Gray</h2>
        <SocialIcons size={25} />
      </div>
      <div>
        <BlogProfile />
      </div>

      {/* Welcome Text */}
      <div className="p-4 mx-auto text-xl text-center">
        <p>
          Hello and Welcome&nbsp;
          <span className="whitespace-nowrap">
            I&apos;m <span className="font-bold">Dave</span>.
          </span>
        </p>
      </div>
      <Posts />
    </main>
  )
}
