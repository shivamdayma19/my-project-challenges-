import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex].text = task;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, { text: task, completed: false }]);
    }
    setTask("");
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const editTask = (index) => {
    setTask(todos[index].text);
    setEditIndex(index);
  };

  const clearAll = () => {
    setTodos([]);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">To‑Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((t, i) => (
          <li
            key={i}
            className="flex justify-between items-center p-2 border rounded"
          >
            <span
              className={`cursor-pointer ${
                t.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleComplete(i)}
            >
              {t.text}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => editTask(i)}
                className="px-2 py-1 bg-yellow-400 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(i)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <div className="flex justify-between mt-4">
          <button
            onClick={clearCompleted}
            className="px-4 py-2 bg-gray-600 text-white rounded"
          >
            Clear Completed
          </button>
          <button
            onClick={clearAll}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;