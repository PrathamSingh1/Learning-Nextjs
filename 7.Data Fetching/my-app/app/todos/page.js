

export default async function Todos() {

    const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=3000");
    const data = await slowResponse.json();
    console.log(data);
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const todos = await response.json();
    // console.log(todos);

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