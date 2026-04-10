import React from "react";

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="d-flex justify-content-center mb-3 gap-2">
      {["all", "completed", "pending"].map((f) => (
        <button
          key={f}
          className={`btn ${
            filter === f ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setFilter(f)}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;