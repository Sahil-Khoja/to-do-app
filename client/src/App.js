import React, { useEffect, useState } from "react";
import API from "./api";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import EditTodoModal from "./components/EditTodoModal";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch Todos
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await API.get("/todos");
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add Todo
  const addTodo = async (text) => {
    try {
      await API.post("/todos", { text });
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Toggle Complete
  const toggleTodo = async (id) => {
    try {
      await API.put(`/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    try {
      await API.delete(`/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // Edit Todo
  const handleEditSave = async (text) => {
    try {
      await API.put(`/todos/${editTodo._id}`, { text });
      setEditTodo(null);
      fetchTodos();
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  // Filter Logic
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className={darkMode ? "bg-dark text-light min-vh-100" : "min-vh-100"}>
      
      <div className="container py-4">

        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Title */}
        <h2 className="text-center mb-4">📝 To-Do App</h2>

        {/* Add Todo */}
        <AddTodo onAdd={addTodo} />

        {/* Filters */}
        <FilterBar filter={filter} setFilter={setFilter} />

        {/* Todo List */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={setEditTodo}
          />
        )}

        {/* Edit Modal */}
        <EditTodoModal
          show={!!editTodo}
          todo={editTodo}
          onClose={() => setEditTodo(null)}
          onSave={handleEditSave}
        />

      </div>
    </div>
  );
}

export default App;