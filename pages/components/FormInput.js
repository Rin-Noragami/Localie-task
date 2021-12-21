import { useState, useContext } from "react";
import StyleForm from "../../style/Form"; 
import { DataContext } from "./DataProvider";

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
  };

  return (
    <StyleForm>
      <form autoComplete="off" onSubmit={addTodo}>
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="Enter a new task"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value.toLowerCase())}
        />
        <button type="submit">Create</button>
      </form>
    </StyleForm>
  );
}