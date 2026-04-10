import { motion } from "framer-motion";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <motion.div
      className="card mb-3 shadow-sm p-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="d-flex justify-content-between">

        <span
          onClick={() => onToggle(todo._id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </span>

        <div className="d-flex gap-2">
          <button className="btn btn-warning btn-sm" onClick={() => onEdit(todo)}>
            Edit
          </button>

          <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo._id)}>
            Delete
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default TodoItem;