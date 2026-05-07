import todos from "../../../../todos.json";
import { writeFile } from "fs/promises";

export async function GET() {
  return Response.json(
    {
      message: "Get route is running",
      todos,
    },
    { status: 200 },
  );
}

export async function POST(request) {
  const todo = await request.json();
  const newTodo = {
    id: crypto.randomUUID(),
    text: todo.text,
    completed: false,
  };
  todos.push(newTodo);
  writeFile("todos.json", JSON.stringify(todos, null, 2));
  return Response.json(newTodo);
}
