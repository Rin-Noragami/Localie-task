import { useState, useContext } from "react";
import Form from "../../style/Form"; 
import Button from "../../style/Button";
import Inputstyle from "../../style/Inputstyle";
import { DataContext } from "./DataProvider";
//imports styles for components
//context data to be passed to all components

export default function FormInput() {
//defines the data format
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
//enters data as an array with tasks
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
  };
//input form for creating a new task
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