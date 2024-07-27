import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"

type IconParams = {
  size: number
}

export default function SocialIcons({ size }: IconParams) {
  return (
    <div className="flex justify-center mx-auto [&>*]:mx-1">
      <Link className="hover:text-slate-400" href={"https://www.youtube.com/"}>
        <FaYoutube size={size} />
      </Link>
      <Link className="hover:text-slate-400" href={"/about"}>
        <FaLaptop size={size} />
      </Link>
      <Link className="hover:text-slate-400" href={"https://github.com/"}>
        <FaGithub size={size} />
      </Link>
      <Link className="hover:text-slate-400" href={"https://twitter.com/"}>
        <FaTwitter size={size} />
      </Link>
    </div>
  )
}
