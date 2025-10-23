import Link from "next/link";

export const metadata = {
  title: "Service",
};


export default function Services() {
    return (
        <>
            <h1>Service Page</h1>
            <div className="flex flex-col mt-20 gap-4">
            <Link href="/">App Development</Link>
            <Link href="/services/web-dev">Web Development</Link>
            <Link href="/">Web Design</Link>
            <Link href="/">SEO</Link>
            </div>

        </>
    )
}