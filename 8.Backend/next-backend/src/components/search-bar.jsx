"use client";

import { PlusIcon } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState();

  const addTodo = async () => {
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    setInput("");
  };
  return (
    <div className="w-1/2 mx-auto mt-16 border-b-1 p-2">
      <div className="flex items-center justify-between pr-2 pl-2 tracking-wider">
        <input
          onChange={(e) => setInput(e.target.value)}
          name="todo"
          value={input}
          type="text"
          placeholder="Let's Add Your Doing..."
          className="outline-none text-lg"
        />
        <div
          onClick={addTodo}
          className="border-1 shadow-md rounded-sm cursor-pointer active:scale-[0.97]"
        >
          <PlusIcon />
        </div>
      </div>
    </div>
  );
}
