import React, { useEffect, useState } from "react";
import "../styles/ToDoList.css";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    const updatedTasks = [...tasks, { text: task, done: false }];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTask("");
  };

  const toggleCheck = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEdit = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, text: editText } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditIndex(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <div className="group">
        <form className="list-add" onSubmit={addTask}>
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="add task ..."
          />
          <button>ADD TASK</button>
        </form>
        <div className="list-container">
          <ul className="list">
            {tasks.map((t, index) => (
              <li className="item" key={index}>
                {editIndex === index ? (
                  <>
                    <div className="checkbox-text">
                      <input type="checkbox" checked={t.done} disabled />
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className={t.done ? "checked" : "item-text"}
                      />
                    </div>
                    <div className="controls">
                      <button
                        onClick={() => saveEdit(index)}
                        className="save-btn"
                      >
                        Save
                      </button>
                      <button onClick={cancelEdit} className="cancel-btn">
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="checkbox-text">
                      <input
                        type="checkbox"
                        checked={t.done}
                        onChange={() => toggleCheck(index)}
                      />
                      <p className={t.done ? "checked" : "item-text"}>
                        {t.text}
                      </p>
                    </div>
                    <div className="controls">
                      <button
                        onClick={() => editTask(index)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTask(index)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
