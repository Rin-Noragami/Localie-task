import { useState, useContext } from "react";
import Form from "../../style/Form"; 
import Button from "../../style/Button";
import Inputstyle from "../../style/Inputstyle";
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
      <Form autoComplete="off" onSubmit={addTodo}>
        <Inputstyle
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="Enter a new task"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value.toLowerCase())}
        />
        <Button type="submit">Create</Button>
      </Form>
  );
}