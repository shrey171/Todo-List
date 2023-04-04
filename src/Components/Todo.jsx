import React from "react";
import PropTypes from "prop-types";

export default function Todo({todo, onDelete}) {
  return (
    <div className="d-flex row justify-content-center my-2" id={todo.sno}>
        <h5 className="col-2 flex-shrink-2 border-end">{todo.title}</h5>
        <p className="col-md-5">{todo.desc}</p>
        <button className="col-md-1 btn btn-danger myDel" onClick={()=>{onDelete(todo.sno)}}>Delete</button>
    </div>
  );
}

Todo.proptypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
