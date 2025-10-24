import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Views from "@/components/Views";
import Link from "next/link";
import { Suspense } from "react";


export default async function Blogs() {
    
    return (
        <>
            <h3>Blog Page </h3>
            <div className="flex gap-4 flex-col items-start mt-20">
            <Link className="bg-gray-300 p-2 ml-5 rounded-[10px]" href="/blogs/1">Blog 1</Link>
            <Link className="bg-gray-300 p-2 ml-5 rounded-[10px]" href="/blogs/2">Blog 2</Link>
            <Link className="bg-gray-300 p-2 ml-5 rounded-[10px]" href="/blogs/3">Blog 3</Link>
            <Link className="bg-gray-300 p-2 ml-5 rounded-[10px]" href="/blogs/4">Blog 4</Link>
            </div>
          
            <Suspense fallback={<div>Loading Likes...</div>}>
                <Likes />
                <Comments />
            </Suspense>
            
            
        </>
    ) 
}