import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleTodo = (iten) => {
    const filterTodos = todos.filter((todo) => todo !== iten);
    setTodos(filterTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Form addTodo={addTodo} />
          <TodoList todos={todos} handleTodo={handleTodo} />
        </div>
      </header>
    </div>
  );
}

export default App;
