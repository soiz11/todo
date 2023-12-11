"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditTodoForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update todo");
      }
      router.refresh();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mx-8 rounded-xl"
      >
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border border-slate-500 px-8 py-2 flex items-center"
          placeholder="Note Title"
        />

        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="border border-slate-500 px-8 py-2 flex items-center"
          placeholder="Note Description"
        />

        <button
          type="submit"
          className="bg-green-600 fontg-bold  text-white py-2 px-8 rounded w-fit"
        >
          Update Note
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
