import React from 'react'

export default function Form({addTodo}) {
    const styles = {
        width: "80%",
        maxWidth: "700px",
        marginInline: "auto"
    };

  return (
    <form style={styles} className="mb-5 border-bottom pb-5">
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Todo Title</label>
            <input type="text" className="form-control" id="title"/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Todo Description</label>
            <input type="text" className="form-control" id="description"/>
        </div>
        <button type="button" className="btn btn-primary" onClick={addTodo}>Add</button>
    </form>
  )
}
