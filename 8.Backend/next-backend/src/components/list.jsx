"use client";

import { useEffect, useState } from "react";
import ListTask from "./list-task";

export default function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const res = await fetch("http://localhost:3000/api/todos");
    const data = await res.json();
    setTodos(data.todos);
  };
  return (
    <div className="mt-8">
      {todos.map((todo) => (
        <ListTask key={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </div>
  );
}
