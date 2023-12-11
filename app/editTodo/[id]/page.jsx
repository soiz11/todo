import EditTodoForm from "@/components/EditTodoForm";
import React from "react";

const getTodoById = async (id) => {
  try {
    const res = await fetch(`/api/todos/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const EditTopic = async ({ params }) => {
  const { id } = params;
  const { todo } = await getTodoById(id);
  // console.log("id", id);
  const { title, description } = todo;
  return (
    <div>
      <EditTodoForm id={id} title={title} description={description} />
    </div>
  );
};

export default EditTopic;
