import React, { useState } from "react";

const EditTodoModal = ({ show, onClose, onSave, todo }) => {
  const [text, setText] = useState(todo?.text || "");

  if (!show) return null;

  return (
    <div className="modal d-block bg-dark bg-opacity-50">
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <h5>Edit Todo</h5>

          <input
            className="form-control my-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>

            <button
              className="btn btn-primary"
              onClick={() => onSave(text)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodoModal;