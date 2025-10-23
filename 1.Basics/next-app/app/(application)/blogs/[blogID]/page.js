import { notFound } from "next/navigation";


export default async function Blog({ params }) {
    console.log(await params);
    const { blogID } = await params;
    if (!/^\d+$/.test(blogID)) {    // return true if number (it is regular expression)
        notFound();
    }
    return (
        <>
            
            <h3>Blog is about {blogID} </h3>
        </>
    ) 
}