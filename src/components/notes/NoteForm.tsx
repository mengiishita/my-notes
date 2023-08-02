import React, { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";

const NoteForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
                <CreatableReactSelect isMulti />
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
