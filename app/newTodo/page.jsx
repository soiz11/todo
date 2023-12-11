import React from "react";

const NewTopic = () => {
  return (
    <form className="flex flex-col gap-2 mx-8 rounded-xl">
      <input
        className="border border-slate-500 px-8 py-2 flex items-center"
        placeholder="Note Title"
      />

      <input
        className="border border-slate-500 px-8 py-2 flex items-center"
        placeholder="Note Description"
      />

      <button className="bg-green-600 fontg-bold  text-white py-2 px-8 rounded w-fit">
        New Note
      </button>
    </form>
  );
};

export default NewTopic;
