import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1 className="">Home Page</h1>
      <div className="flex gap-4 flex-col mt-20">
      <Link className="" href="/about">About</Link>
      <Link className="" href="/services">Services</Link>
      <Link className="" href="/blogs">Blogs</Link>
      </div>
    </>
  );
}
