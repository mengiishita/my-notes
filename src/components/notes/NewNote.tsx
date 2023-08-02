import React from "react";
import NoteForm from "./NoteForm";
import { NewNoteProps } from "../../types";

const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  return (
    <div className="mb-4">
      <h1 className="mb-6 font-bold text-3xl">NewNote</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
};

export default NewNote;
