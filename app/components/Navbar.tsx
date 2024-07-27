import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-slate-300 font-bold flex justify-between text-xl align-middle p-2 sticky drop-shadow-xl z-10">
      <div className="flex-1">
        <Link className=" hover:text-black" href={"/"}>
          Home
        </Link>
      </div>
      <div className="flex flex-1 justify-around">
        <Link className=" hover:text-black" href={"/blog"}>
          Blog
        </Link>
        <Link className=" hover:text-black" href={"/todos"}>
          Todos
        </Link>
        <Link className=" hover:text-black" href={"/users"}>
          Users
        </Link>
        <Link className=" hover:text-black" href={"/about"}>
          About
        </Link>
        <Link className=" hover:text-black" href={"/feedback"}>
          Feedback
        </Link>
      </div>
    </nav>
  )
}
