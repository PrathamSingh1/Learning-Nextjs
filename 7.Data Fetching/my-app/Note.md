Data Fetching -

In Client Components -


'use client';

import { useEffect, useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const data = await response.json()
            setPosts(data);
        }

        fetchPosts();
    }, [])
    return (
        <>
            <h1>Posts</h1>
            <div className="post-container">
                {posts.map(({ id, title, body }) => {
                    return <div className="post-card" key={id}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                })}
            </div>
        </>
    );
};







In Server Components - We can create the server components to the async function.

fetch - This is the next js's extended version of fetch with ISR we can revalidate the fetch call like this.



const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15', {
    next: {
        revalidate: 5000,
    },
})
const todos = await response.json();
console.log(todos);





export default async function Todos() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
    const todos = await response.json();
    console.log(todos);

    return (
        <>
            <h1>Posts</h1>
            <div className="">
                {todos.map(({ id, title, completed }) => {
                    return <div className="flex" key={id}>
                        <input type="checkbox" checked={completed} readOnly />
                        <p>{title}</p>
                    </div>
                })}
            </div>
        </>
    );
};



