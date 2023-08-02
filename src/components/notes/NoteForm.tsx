import React, { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteFormProps, Tag } from "../../types";
import { v4 as uuidV4 } from "uuid";

const NoteForm = ({ onSubmit, onAddTag, availableTags }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: bodyRef.current!.value,
      tags: selectedTags,
    });
    navigate("..");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <div className="flex flex-row mb-6">
          <div className="flex mr-6">
            <div className="flex flex-col">
              <label className="font-light block text-gray-700 text-lg mb-2">
                Title
              </label>
              <input
                ref={titleRef}
                type="text"
                name="title"
                required
                className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <label className="font-light block text-gray-700 text-lg mb-2">
                Tags
              </label>
              <div className="w-[300px]">
                <CreatableReactSelect
                  isMulti
                  value={selectedTags.map((tag) => {
                    return { label: tag.label, value: tag.id };
                  })}
                  onChange={(tags) => {
                    setSelectedTags(
                      tags.map((tag) => {
                        return { label: tag.label, id: tag.value };
                      })
                    );
                  }}
                  onCreateOption={(label) => {
                    const newTag = { id: uuidV4(), label };
                    onAddTag(newTag);
                    setSelectedTags((prev) => [...prev, newTag]);
                  }}
                  options={availableTags.map((tag) => {
                    return { label: tag.label, value: tag.id };
                  })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-light block text-gray-700 text-lg mb-2">
            Body
          </label>
          <textarea
            ref={bodyRef}
            rows={15}
            name="body"
            required
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-6 flex">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          >
            Save
          </button>
          <Link to="..">
            <button
              type="button"
              className="border rounded text-gray-700 py-2 px-4"
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
