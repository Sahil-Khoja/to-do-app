import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      
      <h3>📝 To-Do App</h3>

      <button
        className="btn btn-outline-secondary"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

    </div>
  );
};

export default Navbar;