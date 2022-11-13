import React from 'react'

function TaskCard() {
  return (
    <div className="task-card" id="task-card">
        <h4>Task</h4>
        <p> Task description</p>
        <button>Edit Task</button>
        <button>Delete Task</button>
    </div>
  )
}

export default TaskCard