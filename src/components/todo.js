import React, { useState, useEffect } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTasks(storedList);
    }
  }, []);

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task) => {
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };

  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("localTasks");
  };
  return (
    <section className="section-center container row">
      <form onSubmit={addTask}>
        <h3
          className="mt-3"
          style={{ marginBottom: "1.5rem", textAlign: "center" }}
        >
          Todo App With LocalStorage
        </h3>

        <div className="mb-3 form">
          <input
            name="task"
            type="text"
            value={task}
            placeholder="Write your task..."
            className="form-control"
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="btn btn-success material-icons">
            add
          </button>
        </div>
      </form>

      <div className="badge">
        You have
        {!tasks.length
          ? " no tasks"
          : tasks.length === 1
          ? " 1 task"
          : tasks.length > 1
          ? ` ${tasks.length} tasks`
          : null}
      </div>

      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <div className="col-11">
            <span
              className="form-control bg-white btn mt-2"
              style={{ textAlign: "left", fontWeight: "bold" }}
            >
              {task.title}
            </span>
          </div>

          <div className="col-1">
            <button
              className="mt-2 btn btn-danger material-icons"
              onClick={() => handleDelete(task)}
            >
              delete
            </button>
          </div>
        </React.Fragment>
      ))}
      {!tasks.length ? null : (
        <div style={{ marginTop: "2rem" }}>
          <div className="text-center">
            <button
              className="btn btn-warning mt-4 mb-4"
              onClick={() => handleClear()}
            >
              Clear List
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
