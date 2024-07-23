import { useState, useRef, useEffect } from "react";
import "./App.css";
import ToDoItem from "./assets/Components/task";
function App() {
  const [toDoList, setToDoList] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
    };
    setToDoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteToDo = (id) => {
    setToDoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="container">
      <h1 className="heading">To Do App</h1>
      <div className="creating">
        <input
          ref={inputRef}
          type="text"
          placeholder="Tasks name"
          name=""
          id=""
        />
        <button onClick={add} className="add-task">
          +
        </button>
      </div>
      <div className="tasks">
        {toDoList.map((item, index) => {
          return (
            <ToDoItem
              key={index}
              text={item.text}
              id={item.id}
              deleteToDo={deleteToDo}
            />
          );
        })}
      </div>
      <p>You have undefined tasks</p>
    </div>
  );
}

export default App;
