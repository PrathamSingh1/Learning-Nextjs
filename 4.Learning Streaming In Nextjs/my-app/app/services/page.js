import { cookies } from "next/headers";
import Link from "next/link";

// export const dynamic = "force-dynamic";
// export const dynamic = "force-static";
// export const dynamic = "error";

export const metadata = {
  title: "Service",
};


export default async function Services({ searchParams }) {
//     const search = await searchParams;
//     console.log(search);

    const myCookies = await cookies();
    console.log(myCookies);
    console.log("Running services Page");

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