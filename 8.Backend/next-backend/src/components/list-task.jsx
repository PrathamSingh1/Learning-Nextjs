import { useState } from "react";
import Button from "./button";

export default function ListTask({ text, completed }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editValue, setEditValue] = useState(text);

  const handleEditSave = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-4 w-1/2 mx-auto mt-4 p-3 rounded-lg shadow-md bg-neutral-100">
        <input
          onChange={() => {}}
          type="checkbox"
          checked={completed}
          className="scale-150 cursor-pointer"
        />
        <p className="text-md w-full">{text}</p>
        <div className="flex gap-2 text-xs w-full justify-end items-center">
          <Button title={"Edit"} onClick={() => setIsModalOpen(true)} />
          <Button title={"Delete"} />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl p-6 w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">Edit Task</h2>

            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400"
              placeholder="Edit task..."
              autoFocus
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-xs px-4 py-2 rounded-md border border-neutral-300 hover:bg-neutral-100"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSave}
                className="text-xs px-4 py-2 rounded-md bg-neutral-800 text-white hover:bg-neutral-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
