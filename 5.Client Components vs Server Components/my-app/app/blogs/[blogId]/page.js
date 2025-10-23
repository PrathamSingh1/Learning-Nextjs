import Link from "next/link";
import { notFound } from "next/navigation";

// if you want to stop generating any other new pages rather than ssg and show 404 error page.

export const dynamicParams = false;

// if you have to fetch something and show it on pooling but in the ssg.

// export const revalidate = 5;

// export async function generateStaticParams() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const data = await response.json();
//     console.log(data);
//     return data.map(({ id }) => ({ blogId: `${id}` }))
//     return [
//         {blogId: '1'},
//         {blogId: '2'},
//         {blogId: '3'},

//     ];
// }


export default async function Blog({ params }) {
    const { blogId } = params;
    console.log("blogId: ", blogId);
    if (!/^\d+$/.test(blogId)) {    // return true if number (it is regular expression)
        notFound();
    }
    return (
        <>
            <h1 className="text-2xl">Welcome to the Blog {blogId}</h1>
            <h2>Date: {new Date().toLocaleString()}</h2>
            <h3>Blog is about {blogId} </h3>
            
        </>
    ) 
}