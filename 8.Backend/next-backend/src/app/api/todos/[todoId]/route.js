import todos from "../../../../../todos.json";
import { writeFile } from "fs/promises";

export async function GET(_, { params }) {
  const { todoId } = await params;

  const todo = todos.find((todo) => todoId == todo.id);

  if (!todo) {
    return Response.json(
      {
        message: "Todo Not Found",
      },
      { status: 404 },
    );
  }
  return Response.json({
    todo,
  });
}

export async function PUT(request, { params }) {
  const editTodoData = await request.json();
  const { todoId } = await params;
  const todoIndex = todos.findIndex((todo) => todoId === todo.id);
  const todo = todos[todoIndex];

  console.log(todo);

  const editedTodo = { ...todo, ...editTodoData };

  todos[todoIndex] = editedTodo;
  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  return Response.json(editedTodo);
}

export async function DELETE(_, { params }) {
  const { todoId } = await params;
  const todoIndex = todos.findIndex((todo) => todoId === todo.id);

  todos.splice(todoIndex, 1);
  await writeFile("todos.json", JSON.stringify(todos, null, 2));

  return Response.json({
    message: "Todo Deleted successfully",
  });
}
