
import React from "react";

function Task({ text, category, onDelete }) {
  const handleDelete = () => {
    onDelete(); // Call onDelete function passed from the parent component
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;


