import React from "react";
import NoteForm from "./NoteForm";

const NewNote = () => {
  return (
    <div className="mb-4">
      <h1 className="mb-6 font-bold text-3xl">NewNote</h1>
      <NoteForm />
    </div>
  );
};

export default NewNote;
