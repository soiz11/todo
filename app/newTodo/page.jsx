"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NewTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("failed to create a topic");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-8 rounded-xl"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2 flex items-center"
        placeholder="Note Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2 flex items-center"
        placeholder="Note Description"
      />

      <button
        type="submit"
        className="bg-green-600 fontg-bold  text-white py-2 px-8 rounded w-fit"
      >
        New Note
      </button>
    </form>
  );
};

export default NewTodo;
