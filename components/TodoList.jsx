import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTodos = async () => {
  /**/
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch todos");
    }
    return res.json();
  } catch (err) {
    console.log("error loading topic", err);
  }
};

const TodoList = async () => {
  const { todos } = await getTodos(); /* */
  return (
    <>
      {todos.map((todo, index) => (
        <div
          key={index}
          className="border border-slate-900 p-4 mt-3  mx-8 flex justify-between items-start gap-5 rounded"
        >
          <div>
            <div className="font-bold text-2xl">{todo.title}</div>
            <div>{todo.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={todo._id} />
            <Link href={`/editTodo/${todo._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
