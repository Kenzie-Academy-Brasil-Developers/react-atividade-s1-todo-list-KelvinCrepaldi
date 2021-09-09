import "./style.css";

const TodoList = ({ todos, handleTodo }) => {
  return (
    <ul className="list-container">
      {todos.map((obj) => (
        <li className="list-container_line">
          <span>{obj}</span>
          <button onClick={() => handleTodo(obj)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
