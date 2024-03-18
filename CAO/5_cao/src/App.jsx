import { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    setTodos((prevValue) => [...prevValue, task]);
    setTask(""); // Clear input field after submission
  };

  const deleteItem = (indexToDelete) => {
    const newTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  return (
    <div>
      <header>
        <h2>You have {todos.length} Todos</h2>
      </header>
      <section>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => deleteItem(index)}>[X]</button>
            </li>
          ))}
        </ul>
      </section>
      <form onSubmit={onSubmit}>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter Item"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
