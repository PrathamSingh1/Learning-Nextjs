import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-5 items-center justify-center list-none">
        <Link href={"/"}>
        <li>Home</li>
        </Link>
        <Link href={"/about"}>
        <li>About</li>
        </Link>
        <Link href={"/blogs"}>
        <li>Blogs</li>
        </Link>
        <Link href={"/posts"}>
        <li>Posts</li>
        </Link>
    </div>
  )
}
