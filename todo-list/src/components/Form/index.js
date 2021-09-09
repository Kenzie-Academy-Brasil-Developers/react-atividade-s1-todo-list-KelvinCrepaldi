import { useState } from "react";
import "./style.css";

const Form = ({ addTodo }) => {
  const [valuex, setValue] = useState("");
  return (
    <div className="form-container">
      <input
        value={valuex}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button
        onClick={function () {
          addTodo(valuex);
          setValue("");
        }}
      >
        Adicionar
      </button>
      <div>
        <h4>{valuex}</h4>
      </div>
    </div>
  );
};

export default Form;
