import React, { Fragment, useState } from "react";

function EditTodo({ todo, setEditEvent }) {
  const [description, setDescription] = useState(todo.description);

  const editTodo = async() => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({description})
      })
      setEditEvent((old)=> !old)
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target= {`#s${todo.todo_id}`}
      >
        Edit
      </button>
      <div className="modal fade in" id={`s${todo.todo_id}`} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="btn-close"
                onClick={() => setDescription(todo.description)}
                data-bs-dismiss="modal"
                style={{ margin: 0 }}
              ></button>
            </div>
            <div className="modal-body">
              <input
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              className="form-control"
              type="text" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={editTodo}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => setDescription(todo.description)}
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodo;
