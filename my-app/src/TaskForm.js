import { useState } from 'react';

function TaskForm({ tasks }) {
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");

  // function handleChange(event) {
  //   setTask({
  //     ...tasks,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(task);
  // }

  // const newTask = {
  //   task: task.task,
  //   note: note.note,
  // }

  return (
    <form onSubmit={null}>
      <div className="form-row">
        <div>
        <h3>TO-DO LIST</h3>
          <input
            type="text"
            className="form-control"
            placeholder="New Task"
            name="new-task"
            value={task}
            onChange={null}
            />
        </div>
        <div >
          <input
            type="text"
            className="form-control"
            placeholder="Notes"
            name="notes"
            value={note}
            onChange={null}
          >
          </input>
        </div>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio"
              value="urgent"
              checked={null}
              onChange={null}
            />
            <label className="form-check-label">Urgent</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="radio"
              value="urgent"
              checked={!null}
              onChange={null}
            />
            <label className="form-check-label">Not Urgent</label>
          </div>
        </div>
        <div>
          <button type="submit">
            Add to Task List
          </button>
        </div>
      </div>
    </form>
  )
}

export default TaskForm