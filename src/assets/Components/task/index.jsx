import React, { useState, useRef } from "react";

function ToDoItem(props) {
  const { text, id, deleteToDo } = props;
  function hover() {
    let btn = document.querySelector("#btn");
    btn.style.transition = "0.3s";

    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  }
  function out() {
    let btn = document.querySelector("#btn");

    btn.style.backgroundColor = "transparent";
    btn.style.color = "transparent";
  }
  return (
    <div id={id} onMouseOver={hover} onMouseOut={out} className="task">
      <h1 className="task-name">{text}</h1>
      <button
        onClick={() => {
          deleteToDo(id);
        }}
        id="btn"
        className="del"
      >
        delete
      </button>
    </div>
  );
}

export default ToDoItem;
